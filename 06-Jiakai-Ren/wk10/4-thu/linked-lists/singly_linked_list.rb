class SinglyLinkedList
  class Node
    attr_accessor :value, :next
    def initialize(value=nil)
      @value = value
      @next = nil
    end
  end

  attr_accessor :head

  def initialize(value=nil)
    @head = Node.new(value) unless value.nil?
  end

  def prepend(value)
    # O(1)
    node = Node.new value
    node.next = @head
    @head = node
    self
  end

  def append(value)
    # TODO: what if the list is empty
    last.next = Node.new value
    self
  end

  def last
    # O(N)
    current_node = @head
    while current_node && current_node.next
      current_node = current_node.next
    end
    current_node
  end

  # TODO: More methods
  def remove # AKA .shift -- remove and return the first node
  end

  def insert_after(node, new_value)
  end

  def find(needle) # return the node with value of needle (or nil)
  end

  # Tricky
  def reverse # non-destructive
  end

  def reverse!
  end

  def each # how do you execute a block in Ruby
  end

  def map
  end

  def reduce
  end

  def select
  end

  def reject
  end

  def length # AKA.size()
  end

  def count
  end

  def at_index # equivalent to bros[i]
  end

end

bros = SinglyLinkedList.new 'Groucho'

require 'pry'
binding.pry

