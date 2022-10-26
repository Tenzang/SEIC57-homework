# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Beach.destroy_all

Beach.create :name => 'Bondi', :suburb => 'Bondi', :distance_from_sydney => 7
Beach.create :name => 'Coogee', :suburb => 'Coogee', :distance_from_sydney => 8
Beach.create :name => 'Bronte', :suburb => 'Bronte', :distance_from_sydney => 7

puts "#{ Beach.count } beaches created."