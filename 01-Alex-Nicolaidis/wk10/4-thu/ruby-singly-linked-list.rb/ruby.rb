class SinglyLinkedList
  class Node
    attr_accessor :value, :next
    def initialize (value = nil)
      @value = value 
      @next = null
    end
  end
  attr_accessor :head

  def initialize(value=nil)
    @head = Node.new(value) unless value.nil?
  end

  def prepend(value) #similar to unshift
    node = Node.new value
    node.next = @head
    @head = node
    self #this allows chaining
  end

  def append(value)
    #TODO: handle a empty list -- add as the new head
    self.last.next = Node.new value 
    self
  end

  def last
    #walk the list
    current_node = @head
    while current_node && current_node.next
      current_node = current_node.next
    end
    current_node
  end
  #TODO: More methods 

  def remove #AKA .shift -- remove the first node
  end

  def insert_after(node, new_value)
  end

  def find(needle) # return the node with value of the needle -- no match return nil
  end

  #tricky
  def reverse #non-destructive
  end

  #trickier
  def reverse!
  end

  #Trickiest
  def each
  end

  #Bonus: .map() .reduce() .select() .reject() .length() AKA .size AKA .count()
  #Bonus .at_index(3) #equivilant

end

require 'pry'
binding.pry


