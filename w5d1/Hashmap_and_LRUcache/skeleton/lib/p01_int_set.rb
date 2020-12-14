require "byebug"
class MaxIntSet
  attr_reader :store
  def initialize(max)
    @max = max
    @store = Array.new(@max, false)
  end

  def insert(num)
    is_valid?(num)
    store[num] = true
  end

  def remove(num)
    is_valid?(num)
    store[num] = false
  end

  def include?(num)
    is_valid?(num)
    store[num]
  end

  private

  def is_valid?(num)
    raise "Out of bounds" if num > @max || num < 0
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    # @store[num % @store.length] << num
    # return false if self[num].include?(num)
    self[num] << num
  end

  def remove(num)
    # debugger
    self[num].delete(num)
  end

  def include?(num)
    # self[num].empty? 
    # selfself[num].empty?
    # debugger
    self[num].any? {|ele| ele == num}
  end

  private

  def [](num)
    # debugger
    # optional but useful; return the bucket corresponding to `num`
    @store[num % @store.length]
    # num % @store.length
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    if !self[num].include?(num)
      self[num] << num
      @count += 1
    end
    resize! if @count == @store.length
  end

  def remove(num)
    if self[num].include?(num)
      self[num].delete(num)
      @count -= 1
    end
  end

  def include?(num)
    self[num].any? { |ele| ele == num }
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % @store.length]
  end

  def num_buckets
    @store.length
  end

  def resize!
    new_arr = Array.new(num_buckets * 2) { Array.new } 
    @store.each do |bucket|
      bucket.each do |ele|
        new_arr[ele % new_arr.length] << ele 
      end
    end
    @store = new_arr
  end
end
