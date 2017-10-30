class PapersController < ApplicationController

  # GET /papers
  # GET /papers.json
  def index
     @papers = Paper.all.limit(10)
     render json: @papers
  end

  private    
    # Never trust parameters from the scary internet, only allow the white list through.
    def paper_params
      params.require(:paper).permit(:title, :author, :abstract, :year)
    end
end
