class StaticPagesController < ApplicationController

  def home
  end

  def help
  end
  
  def keyboard
  end
  
  def gate
  end
  
  def clock
  end
  
  def site
  end
  
  def rankings
    @users = User.first(3)
    
    respond_to do |format|
      format.html
      format.json
    end
  end
  
  private
  
  def update_ranking
    @users = User.last(3)
  end
end
