class PopulateIdProperties < Neo4j::Migrations::Base
  def up
    populate_id_property :Paper
  end

  def down
    raise Neo4j::IrreversibleMigration
  end
end
