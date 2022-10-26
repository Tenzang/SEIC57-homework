# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# id INTEGER PRIMARY KEY AUTOINCREMENT,
#     name TEXT,
#     image TEXT,
#     primarystat TEXT,
# 	agility FLOAT,
#     intelligence FLOAT,
#     strength FLOAT

Hero.destroy_all

Hero.create :name => 'Abaddon', :image => 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png', :primarystat => 'STR', :agility => 17, :intelligence => 21, :strength => 23
Hero.create :name => 'Axe', :image => 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/axe.png', :primarystat => 'STR', :agility => 20, :intelligence => 18, :strength => 25
Hero.create :name => 'Enchantress', :image => 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/enchantress.png', :primarystat => 'INT', :agility => 19, :intelligence => 19, :strength => 19

puts "There are #{Hero.count} heros"

