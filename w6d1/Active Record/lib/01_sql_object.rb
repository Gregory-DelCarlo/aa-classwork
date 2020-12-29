require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    self.table_name
    @columns ||= DBConnection.execute2(<<-SQL)
      SELECT
        *
      FROM
        "#{@table_name}"
    SQL
    @columns.first.map(&:to_sym)
  end

  def self.finalize!
    @attributes = {}
    self.columns.each do |column|
      define_method(column) { @attributes[column] }
      define_method("#{column}=") { |x| @attributes[column] = x }
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name
  end

  def self.table_name
    base = "#{self}".split
    non_plural = ""
    base.each do |x|
      unless x = base.first
        non_plural += "_" + x
      else
        non_plural += x
      end
    end
    @table_name = (non_plural + "s").downcase
  end

  def self.all
    self.table_name
    rows = DBConnection.execute(<<-SQL)
      select
        *
      from
        #{@table_name}
    SQL
    self.parse_all(rows)
  end

  def self.parse_all(results)
    results.map { |row| self.new(row) }
  end

  def self.find(id)
    # ...
  end

  def initialize(params = {})
    params.each do |k,v|
      raise "unknown attribute '#{k}'" unless self.class.columns.include?(k.to_sym)
      send(k, v)
    end
  end

  def attributes
    @attributes ||= {}
    @attributes
  end

  def attribute_values
    # ...
  end

  def insert
    # ...
  end

  def update
    # ...
  end

  def save
    # ...
  end
end
