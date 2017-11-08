class QueryControllerController < ApplicationController
  def query
    # TODO: //REFACTOR
    if params[:published]
      @papers =  Paper.where( :title => /.*#{params[:title]}.*/i,
                              :abstract => /.*#{params[:abstract]}.*/i,
                              :content => /.*#{params[:content]}.*/i,
                              :published => params[:published]
                            )
                      .order(:title)
                      .limit(50)
    else
      @papers =  Paper.where( :title => /.*#{params[:title]}.*/i,
                              :abstract => /.*#{params[:abstract]}.*/i,
                              :content => /.*#{params[:content]}.*/i
                            )
                      .order(:title)
                      .limit(50)
    end
    render json: @papers
  end
end
