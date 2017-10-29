# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

PAPER_TITLES = 10.times.map { Faker::Internet.domain_word }

SPLIT=0.4
OFFSET = PAPER_TITLES.length * SPLIT


PAPER_USERS = {
  'dennis@example.com' => PAPER_TITLES[0,OFFSET],
  'simon@example.com' => PAPER_TITLES[OFFSET..-1]
}

PAPER_USERS.each do |email, papers|
  user = User.new(email: email, password: 'secret')
  user.save()
  papers.each {|paper|
  paper = Paper.new(title: paper)
  paper.save()
  }
end
