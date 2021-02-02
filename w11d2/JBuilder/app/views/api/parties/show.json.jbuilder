json.extract! @party, :name, :location

# json.array! @party.guests do |guest|
#     json.name guest.name
# end
# json.guests do 
#     @party.guests.each_with_index do |guest,idx|
#         json.set! idx do 
#             json.name guest.name
#             json.age guest.age
#             json.favorite_color guest.favorite_color
#             json.gifts do 
#                 guest.gifts.each_with_index do |gift,idx |
#                     json.set! idx do
#                         json.title gift.title
#                         json.description gift.description
#                     end
#                 end
#             end
#             # json.gifts guest.gifts
#        end
#     end
# end

json.guests do
    json.array! @party.guests do |guest|
        json.name guest.name
        json.age guest.age
        json.favorite_color guest.favorite_color
        json.gifts do 
            json.array! guest.gifts do |gift|
                json.title gift.title
                json.description gift.description
            end
        end
    end
end