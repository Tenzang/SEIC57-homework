print ">>>>> "
command = gets.chomp
until command == 'quit'
    puts eval command
    print ">>>>> "
    command = gets.chomp
end