class AddUserRefToStat < ActiveRecord::Migration[5.0]
  def change
    add_reference :stats, :user, foreign_key: true
  end
end
