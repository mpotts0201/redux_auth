# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
murphy = User.create(email: 'murphy@potts.com', password: 'password', password_confirmation: 'password')


pika = Creature.create(name: 'Pika', description: 'ZAP', img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/American_pika_%28ochotona_princeps%29_with_a_mouthful_of_flowers.jpg/1200px-American_pika_%28ochotona_princeps%29_with_a_mouthful_of_flowers.jpg', user_id: murphy.id)