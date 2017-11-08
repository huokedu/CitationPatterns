class Paper
  include Neo4j::ActiveNode
  property :title, type: String
  property :abstract, type: String, default: ''
  property :content, type: String, default: ''
  property :published, type: Integer, default: 0
  property :full_text, type: String, default: ''
end
