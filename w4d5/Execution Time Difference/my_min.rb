def my_min(nums)
  nums.each {|num| return num if nums.all?{|n| n >= num}}
end
#n * n   = O(n^2)
#

def optimize_min(nums)
  min = nums[0]
  nums.each {|num| min = num if num < min}
  min
end
#n   =      O(n)
# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p optimize_min(list)  # =>  -5

def largest_contiguous_subsum(nums)
  subs = []
  (0...nums.length).each do |idx1|
    (idx1...nums.length).each do |idx2|
      subs << nums[idx1..idx2]
    end
  end
  sums = subs.map {|sub| sub.sum}
  sums.max
end

#Big O notation...
# (n * n-1 * n) + (n^2 * n) + n^2  =   O(n^2)
#   n^3 + n^3 + n^2 = 0(n^3)


def optimized_largest_contiguous_subsum(nums)
  largest_sum = nil
  current_sum = 0
  subsets(nums).each do |sub|
    current_sum = sub.sum
    largest_sum = current_sum if largest_sum.nil? || current_sum > largest_sum
    # check subsets of length 2
    # if we check all numbers in the array, and we find the two largest numbers
    # that will be the largest sum of subsets length 2
  end
  largest_sum
end

# until nums.empty?
  # num_check = nums.pop
  # current_sum = nums.pop
  # largest_sum = current_sum if current_sum is larger
  # nums.each do |num|
    # current_sum += num
    # largest_sum = current_sum if current_sum is larger
  # end
# end

# [1, 2, -3] => [ [1], [2], [-3], [1,2], [2,-3], [1,2,3] ] => 3 from [1,2]
# until nums.empty?
#   current_sum += nums.pop => 1
#   current_sum > largest_sum ? => 1
# end
# until nums.empty?
#   current_sum += nums.pop => 3
#   current_sum > largest_sum ? => 3
# end
# until nums.empty?
#   current_sum += nums.pop => 0
#   current_sum > largest_sum ? => 3
# end

# [2, 3, -6, 7, -6, 7] => [[2], [3], [-6], [7], [-6], [7], [2,3], [2,3,-6], []] => 8 from [7,-6,7]
# until nums.empty?
#   current_sum += nums.pop => current_sum = 2
#   current_sum > largest_sum ? => largest_sum = 2
# end
# until nums.empty?
#   current_sum += nums.pop => current_sum = 5
#   current_sum > largest_sum ? => largest_sum = 5
# end
# until nums.empty?
#   current_sum += nums.pop => current_sum = -1
#   current_sum > largest_sum ? => largest_sum = 5
# end
# until nums.empty?
#   current_sum += nums.pop => current_sum = 6
#   current_sum > largest_sum ? => largest_sum = 6
# end
# until nums.empty?
#   current_sum += nums.pop => current_sum = 0
#   current_sum > largest_sum ? => largest_sum = 6
# end
# until nums.empty?
#   current_sum += nums.pop => current_sum = 7
#   current_sum > largest_sum ? => largest_sum = 7
# end



# hint:
  # challenge is to build algorithm in O(n) and constant space
  # that's the hint ^^^
  # totally doable in a single pass
# n 
# takes each element and compares it to the current largest sum
# only loop through the elements once
# if the BigO of subsets is not included

def subsets(nums)
  subs = []
  (0...nums.length).each do |idx1|
    (idx1...nums.length).each do |idx2|
      subs << nums[idx1..idx2]
    end
  end
  subs
end

# subsets is O(n^2)

p subsets([1,2,3])
p subsets([2, 3, -6, 7, -6, 7])


# list = [5, 3, -7]
# p optimized_largest_contiguous_subsum(list) # => 8

# list = [2, 3, -6, 7, -6, 7]
# p optimized_largest_contiguous_subsum(list) # => 8 (from [7, -6, 7])

# list = [-5, -1, -3]
# p optimized_largest_contiguous_subsum(list) # => -1 (from [-1])

# [-5], [-1], [-3], [-5,-1], [-1,-3], 

# possible sub-sums
[5]           # => 5
[5, 3]        # => 8 --> we want this one
[5, 3, -7]    # => 1
[3]           # => 3
[3, -7]       # => -4
[-7]          # => -7