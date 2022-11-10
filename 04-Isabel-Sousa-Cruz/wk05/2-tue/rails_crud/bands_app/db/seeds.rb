Band.destroy_all

Band.create :name => "Foster The People", :albums_number => 6, :top_song => "Pumped Up kicks"

puts "#{Band.count} bands were created"