class Author 
  include Neo4j::ActiveNode
  property :first_name, type: String
  property :last_name, type: String



end
