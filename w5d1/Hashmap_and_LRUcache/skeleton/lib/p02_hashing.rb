class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    return 0 if self.empty?
    keys = []
    self.each_with_index do |ele, idx|
      if ele.is_a?(Numeric)
        keys << ele + idx
      elsif ele.is_a?(String)
        keys << ele[0].ord + idx
      elsif ele.is_a?(Array)
        keys << ele.length + keys.length
      else
        keys << idx
      end
    end
    keys.map(&:hash).sum
  end
end

class String
  def hash
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    0
  end
end
