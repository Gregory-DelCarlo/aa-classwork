class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    unless self[key].include?(key) 
      self[key] << key 
      @count += 1
    end    
    resize! if @count == @store.length
  end

  def include?(key)
    self[key].include?(key)
  end

  def remove(key)
    if self[key].include?(key)
      self[key].delete(key)
      @count -= 1
    end
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num.hash % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    new_arr = Array.new(num_buckets * 2) {Array.new}
    @store.each do |bucket|
      bucket.each do |ele|
        new_arr[ele.hash % new_arr.length] << ele
      end
    end
    @store = new_arr
  end
end
