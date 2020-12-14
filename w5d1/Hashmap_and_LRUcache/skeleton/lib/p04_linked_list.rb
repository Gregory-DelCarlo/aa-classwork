class Node
  attr_reader :key
  attr_accessor :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
    @prev.next = @next
    @next.prev = @prev unless @next.nil?
  end
end

class LinkedList
  include Enumerable
  def initialize
    @head = Node.new
    @tail = Node.new
    @head.next = @tail
    @tail.prev = @head
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    @head.next
  end

  def last
    @tail.prev
  end

  def empty?
    @head.next == @tail && @tail.prev == @head
  end

  # return value of node with key "key"
  def get(key)
    each { |node| return node.val if node.key == key}
  end

  def include?(key)
  end

  def append(key, val)
    new_node = Node.new(key, val)
    new_node.prev = last 
    new_node.next = @tail
    last.next = new_node
    @tail.prev = new_node
    @head.next = new_node if @head.next == @tail
  end

  def update(key, val)
    each { |node| node.val = val if node.key == key }
  end

  def remove(key)
      each do |node| 
        if node.key == key
          prev_node = node.prev
          next_node = node.next
          prev_node.prev = next_node
          next_node.next = prev_node
          node.prev, node.next = nil, nil
        end
      end
  end

  def each
    start = @head.next
    while start.next
      yield(start)
      start = start.next
    end
  end

  # uncomment when you have `each` working and `Enumerable` included
  # def to_s
  #   inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  # end
end
