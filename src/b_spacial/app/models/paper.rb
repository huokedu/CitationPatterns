class Paper
  include Neo4j::ActiveNode
  id_property :neo_id
  property :title, type: String
  property :author, type: String
  property :abstract, type: String
  property :year, type: String



end
