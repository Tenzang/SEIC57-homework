
# splat both constructs and deconstructs arrays when passed into a method

#constructive
def sum(*args)
    puts "args #{args}"
    puts "class #{args.class}"
    total = 0
    args.each {|a| total += a}
    puts "total "+ total.to_s
    # puts *args
end

sum(1,2)
# sum(3,4,5)
# sum(6,7,8,9)
# sum(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20)

#deconstruct


def sum(x,y,z)
    puts "x #{x} #{x.class}" 
    puts "y #{y} #{y.class}" 
    puts "z #{z} #{z.class}" 
end

sum(*[1,2,3])
# sum(*[4,5,6])
# sum(*[7,8,9])