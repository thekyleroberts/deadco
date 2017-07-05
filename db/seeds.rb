# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#=====================
#   Deletes all entries at the start of each running
#=====================

User.delete_all
Stat.delete_all

#=====================
#   SEED: USERS
#=====================

fake_user_array = ['Abe', 'Ben', 'Carl', 'Dan', 'Ed', 'Fred', 'Gus', 'Hans', 'Ian', 'Jon']

fake_user_array.each do |fake_user|
  User.create!( name: fake_user,  
                email: Faker::Internet.email)
end

#=====================
#   SEED: STATS
#=====================

users = User.all
users.each do | fake_user |
    Stat.create!(score: 35,
                 user_id: fake_user.id)
end

