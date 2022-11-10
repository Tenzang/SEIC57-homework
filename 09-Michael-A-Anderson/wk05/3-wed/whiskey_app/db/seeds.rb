Brewery.destroy_all
b1 = Brewery.create(:name => "Chivas", :country => "USA", :est_year => "1786", :logo => "https://logos-world.net/wp-content/uploads/2021/08/Logo-Chivas-Regal.png" )
b2 = Brewery.create(:name => "Jameson", :country => "Ireland", :est_year => "1780", :logo => "https://www.whiskyflavour.com/wp-content/uploads/2017/08/Jameson-Irish-Whiskey-Logo.jpg.webp")

puts "#{Brewery.count} breweries created"

Whiskey.destroy_all

Whiskey.create(:name => "Chivas Regal blended scotch whisky", :alcohol_content => 40, :aged => 18, :brewery_id => b1.id)
Whiskey.create(:name => "Chivas Regal blended scotch whisky", :alcohol_content => 40, :aged => 12, :brewery_id => b1.id)
Whiskey.create(:name => "Jameson Irish Whiskey", :alcohol_content => 40, :aged => 7, :brewery_id => b2.id)
Whiskey.create(:name => "Jameson Black Barrel Irish Whiskey", :alcohol_content => 40, :brewery_id => b2.id)

puts "#{Whiskey.count} whiskeys created"


