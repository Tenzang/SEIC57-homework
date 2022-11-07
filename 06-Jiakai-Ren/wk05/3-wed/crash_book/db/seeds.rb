Airline.destroy_all

a1 = Airline.create(:name => 'Qantas Airways', :code => 'QF', :country => 'Australia', :fleet => 126, :logo => 'https://upload.wikimedia.org/wikipedia/en/0/02/Qantas_Airways_logo_2016.svg')
a2 = Airline.create(:name => 'Virgin Australia', :code => 'VA', :country => 'Australia', :fleet => 77, :logo => 'https://upload.wikimedia.org/wikipedia/en/0/06/Virgin_Australia_Logo_2022.svg')

puts "#{Airline.count} airlines created."

Incident.destroy_all

i1 = Incident.create(:flight_number => 32, :date => '2010-11-04', :description => 'Qantas Flight 32 was a regularly scheduled passenger flight from London to Sydney via Singapore. On 4 November 2010, the aircraft operating the route, an Airbus A380, suffered an uncontained failure in one of its four Rolls-Royce Trent 900 engines.', :image => 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Qantas_Flight_32_engine_damage_-_4_Nov_2010.jpg', :death => 0, :injury => 0, :survival => 469)
i2 = Incident.create(:flight_number => 2279, :date => '2008-02-08', :description => 'Air New Zealand Flight 2279 (also known as Eagle Airways Flight 2279) was a commuter flight operated by Air National on behalf of Eagle Airways, a regional carrier division of Air New Zealand.', :image => 'https://upload.wikimedia.org/wikipedia/commons/0/05/ZK-ECN.jpg', :death => 0, :injury => 3, :survival => 9)

puts "#{Incident.count} incidents created."

a1.incidents << i1