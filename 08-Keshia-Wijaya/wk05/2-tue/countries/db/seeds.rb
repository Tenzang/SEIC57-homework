# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Country.destroy_all

Country.create :name => 'Australia', :capital => 'Canberra', :population => 26000000
Country.create :name => 'Netherlands', :capital => 'Amsterdam', :population => 17500000
Country.create :name => 'Singapore', :capital => 'Singapore', :population => 5600000

puts "#{ Country.count } countries created."