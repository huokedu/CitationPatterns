class Author
  include Neo4j::ActiveNode
  property :first_name, type: String
  property :last_name, type: String

  has_many :out, :papers, type: :wrote, model_class: :Paper

end
