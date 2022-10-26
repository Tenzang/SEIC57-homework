FizzyDrink.destroy_all

FizzyDrink.create :brand => "Coke", :flavor =>"Cola", :caffeine =>1
FizzyDrink.create :brand => "Coke", :flavor =>"Diet", :caffeine =>1
FizzyDrink.create :brand => "Coke", :flavor =>"Vanilla", :caffeine =>1
FizzyDrink.create :brand => "Mountain Dew", :flavor =>"Energized", :caffeine =>1
puts "#{FizzyDrink.count} fizzy drinks created"