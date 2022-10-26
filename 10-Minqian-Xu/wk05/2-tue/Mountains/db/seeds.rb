# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Mountain.destroy_all

Mountain.create :name => 'Mount Everest', :height => 8848, :country => Nepal China
Mountain.create :name => 'K2', :height => 8611, :country => Pakistan China
Mountain.create :name => 'Kangchenjunga', :height => 8586, :country => Nepal India

puts "#{ Mountain.count } mountains created."