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
#n^2



def okay_two_sum?(arr, target_sum)
  arr.sort!                          #O(n log n)
  return false if arr.length == 1
  first_num = arr.pop
  if arr.any? {|num| num + first_num == target_sum}     #O(n)
    return true
  else
    okay_two_sum?(arr, target_sum)        #O(log n)
  end

  # poss_sum = arr[arr.length/2 - 1] + arr[arr.length/2]
  # return true if poss_sum == target_sum
  # okay_two_sum?(arr[0...arr.length/2], target_sum) || okay_two_sum?(arr[arr.length/2..-1], target_sum)
end
#big O = O(n log n) = n log n + n + (log n)
arr = [0, 1, 5, 7]
p okay_two_sum?(arr, 6) # => should be true
p okay_two_sum?(arr, 10) # => should be false
# Sorting
# As a person of elevated algorithmic sensibilities, the brute-force approach is beneath you. Leave that nonsense to the riffraff. Instead, you'll apply a refined and time-honored technique: sorting.
# Sort your data, then try to solve the problem.
# What does sorting do to the lower bound of your time complexity?
# How might sorting that make the problem easier?
# Write a second solution, called okay_two_sum?, which uses sorting. Make sure it works correctly.
# Hint: (There are a couple ways to solve this problem once it's sorted. One way involves using a very cheap algorithm that can only be used on sorted data sets. What are some such algorithms you know?)