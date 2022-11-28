Character.destroy_all

Character.create(:name => "Wraith",  :category => "Attack", :age => 24, :ability => "Portals", :image =>"https://d1fs8ljxwyzba6.cloudfront.net/assets/article/2019/02/21/wraith-guide-header-apex-legends_feature.jpg")
Character.create(:name => "Cassidy",  :category => "Attack", :age => 40, :ability => "Pistols", :image =>"https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/04/overwatch-2-cassidy-aims-revolver.jpg")
Character.create(:name => "Jett",  :category => "Ninja", :age => 24, :ability => "Mobility Assassinations", :image =>"https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltceaa6cf20d328bd5/5eb7cdc1b1f2e27c950d2aaa/V_AGENTS_587x900_Jett.png")


puts "#{ Character.count } games created"

Game.destroy_all

Game.create(:name => "Apex Legends", :dor => "2020-05-06", :developer => "Respawn", :description => "A fun game", :image =>"https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Apex_legends_cover.jpg/220px-Apex_legends_cover.jpg")
Game.create(:name => "Overwatch 2", :dor => "2020-05-06", :developer => "Blizzard", :description => "A fun game", :image => "https://static-cdn.jtvnw.net/ttv-boxart/515025_IGDB-272x380.jpg")
Game.create(:name => "Valorant", :dor => "2020-05-06", :developer => "Riot Games", :description => "A fun game", :image => "https://www.kemperlesnik.com/wp-content/uploads/2020/04/valorant-official-art.jpg")

puts "#{ Game.count } characters created"

