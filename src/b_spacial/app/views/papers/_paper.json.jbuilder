json.extract! paper, :id, :title, :author, :abstract, :year, :created_at, :updated_at
json.url paper_url(paper, format: :json)
