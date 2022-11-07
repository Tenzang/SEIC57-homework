Author.destroy_all
Author.create(:name => 'Gabriel Garcia', :nationality => 'Colombian', :born => '1927-03-06', :genre => 'Novels', :image => 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Gabriel_Garcia_Marquez.jpg')
Author.create(:name => 'Mario Vargas Llosa', :nationality => 'Peru', :born => '1936-03-28', :genre => 'Novels', :image => 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Mario_Vargas_Llosa_%28crop_2%29.jpg')
Author.create(:name => 'Julio Cortázar', :nationality => 'Belgium', :born => '1914-07-26', :genre => 'Poet', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Cort%C3%A1zar.jpg/400px-Cort%C3%A1zar.jpg')
Author.create(:name => 'Jorge Luis Borges', :nationality => 'Argentina', :born => '1914-07-26', :genre => 'Poet', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Jorge_Luis_Borges_1951%2C_by_Grete_Stern.jpg/440px-Jorge_Luis_Borges_1951%2C_by_Grete_Stern.jpg')
Author.create(:name => 'Isabel Allende', :nationality => 'Chilean', :born => '1942-07-02', :genre => 'Poet', :image => 'https://newint.org/sites/default/files/u709/Isabel%20Allende%20author%20photo%20c%20Lori%20Barra%20630.jpg')
Author.create(:name => 'Alejandra Pizarnik', :nationality => 'Argentina', :born => '1936-04-29', :genre => 'Poet', :image => 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Pizarnik_byn.jpg')
puts "#{ Author.count } authors created."


Book.destroy_all
Book.create(:title => 'One Hundred Years of Solitude', :language => 'Spanish', :release => '1967', :image => 'https://upload.wikimedia.org/wikipedia/en/a/a0/Cien_a%C3%B1os_de_soledad_%28book_cover%2C_1967%29.jpg')
Book.create(:title => 'The Feast of the Goat', :language => 'Spanish', :release => '2000', :image => 'https://upload.wikimedia.org/wikipedia/en/3/32/Feast_of_the_Goat.jpg')
Book.create(:title => 'Around the Day in Eighty Worlds', :language => 'Spanish', :release => '1967', :image => 'https://upload.wikimedia.org/wikipedia/en/a/a2/LaVueltaAlDiaEnOchentaMundos.jpg')
Book.create(:title => 'The House of the Spirits', :language => 'Spanish', :release => '1982', :image => 'https://upload.wikimedia.org/wikipedia/en/9/91/Houseofthesprirts.jpg')
Book.create(:title => 'Of Love and Shadows', :language => 'Spanish', :release => '1984', :image => 'https://upload.wikimedia.org/wikipedia/en/f/f4/Of_Love_and_Shadows_%28novel%29.jpg')
Book.create(:title => 'The Most Foreign Country', :language => 'Spanish', :release => '1955', :image => 'https://m.media-amazon.com/images/I/41QSWLgnLXL._AC_SY580_.jpg')
puts "#{ Book.count } books created."

