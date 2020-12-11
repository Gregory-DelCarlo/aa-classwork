require "byebug"
def first_anagrams?(word1, word2)
    word1_perms = word1.split('').permutation.to_a.map(&:join)
    word1_perms.include?(word2)
end

# (n + n! + n + n*n) => n! + n + n^2 => n!
# word1_perms is n! size and takes n! time
# n! + n!
# O(n!)




# p first_anagrams?("gizmo", "sally")    #=> false
# p first_anagrams?("elvis", "lives")    #=> true

# subsets are

def second_anagrams?(word1, word2)
    word1.each_char.with_index do |char, idx|
        # debugger
        begin
            word2[word2.index(char)] = ''
        rescue 
            return false
        end
    end
    return true if word2.length == 0
    false
end

p second_anagrams?("gizmo", "sally")    #=> false
p second_anagrams?("elvis", "lives")    #=> true




# some3 nice O(n) examples

# def first_anagrams?(word1, word2)
#     hash1 = Hash.new(0)
#     word1.each_char do |char|
#         hash1[char] += 1
#     end

#     hash2 = Hash.new(0)
#     word2.each_char do |char|
#         hash2[char] += 1
#     end

#     hash1 == hash2
# end

# def anagrams(word1, word2)
#     word1.split('').sort == word2.split('').sort
# end