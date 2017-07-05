class StatsController < ApplicationController
    def create
        #@user = User.find(params[:user_id])
        @stat = @user.stats.create(stat_params)
        @stat[:score] = rand(50..100)
        redirect_to user_path(@user)
    end
    
    private
        def stat_params
            params.require(:stat).permit(:score)
        end
end
