# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
murphy = User.create(email: 'murphy@potts.com', password: 'password', password_confirmation: 'password')
kate = User.create(email: 'kate@kate.com', password: 'password', password_confirmation: 'password')


pika = Creature.create(
    name: 'Pikachu', 
    description: 'lightning flash across the sky, silver clouds begin to cry', 
    img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/American_pika_%28ochotona_princeps%29_with_a_mouthful_of_flowers.jpg/1200px-American_pika_%28ochotona_princeps%29_with_a_mouthful_of_flowers.jpg', 
    user_id: murphy.id
)
smog = Creature.create(
    name: 'Smog', 
    description: 'A cloud of smoke and fog so toxic, They had to give it a name.',
    img_url: 'https://cdn.dmnews.com/files/base/acbm/dmn/image/2018/06/960w/tobaccosmoke_1440613.5b1f2057817d3.jpg',
    user_id: kate.id
    
)