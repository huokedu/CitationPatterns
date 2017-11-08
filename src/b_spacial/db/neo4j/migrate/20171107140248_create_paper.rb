class CreatePaper < Neo4j::Migrations::Base
  def up
    add_constraint :Paper, :uuid
  end

  def down
    drop_constraint :Paper, :uuid
  end
end
