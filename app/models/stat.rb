class Stat < ApplicationRecord
    
    belongs_to :user
    

    def add_points
        points = self.score + rand(50)
        update_attribute(:score, points)
    end
    
    def subtract_points
        points = self.score - rand(50)
        update_attribute(:score, points)
    end
    
end
