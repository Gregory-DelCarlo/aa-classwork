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
    (idx1+1...nums.length).each do |idx2|
      subs << nums[idx1..idx2]
    end
  end
  sums = subs.map {|sub| sub.sum}
  sums.max
end

#Big O notation...
# n * n-1 + n^2 + n^2  =   O(n^2)

list = [5, 3, -7]
p largest_contiguous_subsum(list) # => 8

# possible sub-sums
[5]           # => 5
[5, 3]        # => 8 --> we want this one
[5, 3, -7]    # => 1
[3]           # => 3
[3, -7]       # => -4
[-7]          # => -7