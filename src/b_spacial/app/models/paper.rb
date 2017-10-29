class Paper 
  include Neo4j::ActiveNode
  property :title, type: String
  property :author, type: String
  property :abstract, type: String
  property :year, type: String



end
