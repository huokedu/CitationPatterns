class Paper
  include Neo4j::ActiveNode
  property :title, type: String
  property :abstract, type: String, default: ''
  property :content, type: String, default: ''
  property :published, type: Integer, default: 0
  property :full_text, type: String, default: ''

  has_many :in, :authors, type: :wrote


  has_many :out, :references_out, type: :references, model_class: :Paper
  has_many :in, :references_in, type: :references, model_class: :Paper
end
