class StatisticsController < ApplicationController
  def show
    @session = Neo4j::Session.open(:server_db)

    @paper_count          = Paper.all.count
    @author_count         = Author.all.count
    @node_count           = @paper_count + @author_count

    @wrote_count          = @session.query("Match ()-[t:wrote]->() return count(t) as count").first.count
    @references_count     = @session.query("Match ()-[t:references]->() return count(t) as count").first.count
    @rel_count            = @wrote_count + @references_count

    @avg_paper_degree     = @paper_count.to_f  / @rel_count
    @avg_author_degree    = @author_count.to_f  / @wrote_count
    @avg_degree           = @node_count.to_f  / @rel_count

    render json: {
      :paper_count => @paper_count,
      :author_count => @author_count,
      :node_count => @node_count,
      :wrote_count => @wrote_count,
      :references_count => @references_count,
      :relationship_count => @rel_count,
      :avg_paper_degree => @avg_paper_degree,
      :avg_author_degree => @avg_author_degree,
      :avg_degree => @avg_degree
    }
  end
end
