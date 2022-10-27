Artist.destroy_all

Artist.create(:name => 'Nirvana', :hometown => 'Aberdeen, Washington', :genre => 'Grunge', :startyear => 1987, :image =>'https://static.wikia.nocookie.net/over-the-counter-culture/images/a/ad/Rs-nirvana-e9e22e4b-f7d9-4fc7-bd94-23c30084ce94.jpg/revision/latest?cb=20190227030843')
Artist.create(:name => 'Red Hot Chili Peppers', :hometown => 'Los Angeles, California', :genre => 'Funk Rock', :startyear => 1983, :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/RHCP_Live_in_London_26_June_2022.jpg/300px-RHCP_Live_in_London_26_June_2022.jpg')
Artist.create(:name => 'The Rolling Stones', :hometown => 'London, England', :genre => 'Rock', :startyear => 1962, :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/The_Rolling_Stones_Summerfest_in_Milwaukee_-_2015.jpg/277px-The_Rolling_Stones_Summerfest_in_Milwaukee_-_2015.jpg')
Artist.create(:name => 'Led Zepplin', :hometown => 'London, England', :genre => 'Hard Rock', :startyear => 1968, :image => 'https://www.udiscovermusic.com/wp-content/uploads/2020/11/Led-Zeppelin-GettyImages-84848509-1000x600.jpg')
Artist.create(:name => 'Pink Floyd', :hometown => 'London, England', :genre => 'Progressive Rock', :startyear => 1965, :image => 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Pink_Floyd_-_all_members.jpg/250px-Pink_Floyd_-_all_members.jpg')
Artist.create(:name => 'Eagles', :hometown => 'Los Angeles, California', :genre => 'Rock', :startyear => 1971, :image => 'https://beat.com.au/wp-content/uploads/2018/10/eaglesband.jpg')
Artist.create(:name => 'Lynyrd Skynyrd', :hometown => 'Jacksonville, Florida', :genre => 'Southern Rock', :startyear => 1964, :image => 'https://upload.wikimedia.org/wikipedia/commons/7/78/Lynyrd_Skynyrd_band_%281973%29.jpg')

puts "#{ Artist.count } artists created."

Album.destroy_all

Album.create(:name => 'Nevermind', :tracks => 13, :label => 'David Geffen Company Records', :recordedyear => '1991', :artist_id => 1, :image => 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/NirvanaNevermindalbumcover.jpg/220px-NirvanaNevermindalbumcover.jpg')
Album.create(:name => 'By The Way', :tracks => 16, :label => 'Warner Bros Records', :recordedyear => '2001', :artist_id => 2, :image => 'https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Rhcp9.jpg/220px-Rhcp9.jpg')
Album.create(:name => 'Let it Bleed', :tracks => 9, :label => 'Decca', :recordedyear => '1968', :artist_id => 3, :image => 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/LetitbleedRS.jpg/220px-LetitbleedRS.jpg')
Album.create(:name => 'Led Zeppelin', :tracks => 9, :label => 'Atlantic', :recordedyear => '1968', :artist_id => 4, :image => 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Led_Zeppelin_-_Led_Zeppelin_%281969%29_front_cover.png/220px-Led_Zeppelin_-_Led_Zeppelin_%281969%29_front_cover.png')
Album.create(:name => 'The Dark Side of the Moon', :tracks => 15, :label => 'Harvest', :recordedyear => '1972', :artist_id => 5, :image => 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Dark_Side_of_the_Moon.png/220px-Dark_Side_of_the_Moon.png')
Album.create(:name => 'On the Border', :tracks => 10, :label => 'Asylum Records', :recordedyear => '1974', :artist_id => 6, :image => 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/The_Eagles_-_On_the_Border.jpg/220px-The_Eagles_-_On_the_Border.jpg')
Album.create(:name => 'Second Helping', :tracks => 19, :label => 'Sounds of the South', :recordedyear => '1973', :artist_id => 7, :image => 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/SecondHelpingLynyrdSkynyrd.jpg/220px-SecondHelpingLynyrdSkynyrd.jpg')

puts "#{ Album.count } albums created."