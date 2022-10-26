Ocean.destroy_all

Ocean.create :name => 'Pacific', :area => 165000000, :depth => 11000
Ocean.create :name => 'Atlantic', :area => 106000000, :depth => 8486
Ocean.create :name => 'Arctic', :area => 14000000, :depth => 5450

puts "#{ Ocean.count } oceans created."