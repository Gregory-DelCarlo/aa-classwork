# json.set! @parties do
# json.parties do
    json.array! @parties do |party|
        json.name party.name
        json.location party.location
        json.guest_ids party.guest_ids
    end
# end