class PapersController < ApplicationController

  # GET /papers
  # GET /papers.json
  def index
    if params[:query]
      if !params[:query].empty?
        @papers = Paper.query_as(:p).where("p.title CONTAINS '"+params[:query]+"'")
        .limit(50)
        .pluck(:p)
        render json: @papers
      else
        @papers = Paper.all.limit(10)
        render json: @papers
      end
    else
      @papers = Paper.all.limit(10)
      render json: @papers
    end
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def paper_params
      params.require(:paper).permit(:title, :author, :abstract, :year)
    end
end
