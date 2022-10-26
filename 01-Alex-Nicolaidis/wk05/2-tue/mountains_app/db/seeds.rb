Mountain.destroy_all

Mountain.create :name => "Mount Everest", :height => 1000, :country => 'Nepal'
Mountain.create :name => "Mount Kilimanjaro", :height => 800, :country => 'Tanzania'


puts "#{ Mountain.count } mountains created."
