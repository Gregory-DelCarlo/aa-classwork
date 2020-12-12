def two_sum?(arr, target_sum)
  (0...arr.length).each do |idx1|
    (idx1+1...arr.length).each do |idx2|
      sum = arr[idx1] + arr[idx2]
      return true if sum == target_sum
    end
  end
  false
end

#big O
#O(n^2)



def okay_two_sum?(arr, target_sum)
  arr.sort!                          #O(n log n)
  until arr.empty?
    num = arr.pop
    return true if bsearch(arr, target_sum - num)
  end
  false
end
#big O = O(n log n) = n log n + n + (log n)

def bsearch(arr, target)
  return false if arr.length == 0

  mid = arr.length/2

  return mid if arr[mid] == target
  if arr[mid] > target
    found = bsearch(arr[mid+1..-1], target)
    found + mid + 1 unless found == false
  else
    bsearch(arr[0...mid], target)
  end
  false
end

arr = [0, 1, 5, 7]
# p bsearch(arr,5)
# p bsearch(arr, 0)
p okay_two_sum?(arr, 6) # => should be true
p okay_two_sum?(arr, 10) # => should be false
# Sorting
# As a person of elevated algorithmic sensibilities, the brute-force approach is beneath you. Leave that nonsense to the riffraff. Instead, you'll apply a refined and time-honored technique: sorting.
# Sort your data, then try to solve the problem.
# What does sorting do to the lower bound of your time complexity?
# How might sorting that make the problem easier?
# Write a second solution, called okay_two_sum?, which uses sorting. Make sure it works correctly.
# Hint: (There are a couple ways to solve this problem once it's sorted. One way involves using a very cheap algorithm that can only be used on sorted data sets. What are some such algorithms you know?)

class HashMap
  attr_reader :hashmap
  def initialize(arr)  # can pass it an array and a default value
    @hashmap = {}
    i = 0
    arr.each { |ele| @hashmap[i] = ele ; i += 1 }
  end

  def get(index)
    @hashmap[index]
  end

  def set(index, value)
    @hash_map[index] = value
  end
end


# def hash_two_sum?(arr, target)
#   hash1 = HashMap.new(arr)
#   (0...arr.length).each do |i|
#     hash1.get(i) + hash1.get(i+1) == target
#   end
# end



# arr = [1,2,3,4]
# hash_two_sum?(arr, 6)


# arr[3] => 4

# hash[3] => 4

