class User < ApplicationRecord
    has_one :stat, dependent: :destroy
    
    validates :name, presence: true
    validates :email, presence: true
 
end
