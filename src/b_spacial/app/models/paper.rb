class Paper 
  include Neo4j::ActiveNode
  property :title, type: String
  property :abstract, type: String
  property :content, type: String
  property :published, type: Integer



end
