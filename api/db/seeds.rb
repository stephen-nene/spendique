# db/seeds.rb
require "faker"

puts "🌱 Clearing existing records..."
Category.destroy_all
Finance.destroy_all
User.destroy_all

puts "\n"

# Helper to create users
def create_users(role, count, start_index = 1)
  users = []
  count.times do |i|
    user = User.create!(
      first_name: Faker::Name.first_name,
      middle_name: Faker::Name.middle_name,
      last_name: Faker::Name.last_name,
      username: Faker::Internet.unique.username,
      phonenumber: Faker::PhoneNumber.cell_phone,
      email: "#{role}#{start_index + i}@test.com",
      password: "assword",  
      password_confirmation: "assword",  
      addresses: [
        {
          street: Faker::Address.street_address,
          city: Faker::Address.city,
          state: Faker::Address.state,
          country: Faker::Address.country
        }
      ],
      role: role,
      status: User.statuses.keys.sample,
      salary: rand(30000.0..100000.0).round(2)
    )
    users << user
  end
  users
end


# Helper to generate random categories
def seed_categories
  
  50.times do 
    Category.create!(
      # Faker::Company.name
      # Faker::Commerce.department
      name: Faker::Quote.unique.robin,
      status: Category.statuses.keys.sample
    )
  end
end


# Helper to generate finances for a user in a specific month
def generate_finances_for_user_in_month(user, categories, month, year)
  # Define the start and end date of the month
  start_date = Date.new(year, month, 1)
  end_date = start_date.end_of_month
  
  # puts "✨ Seeding finances for #{start_date.strftime("%B %Y")} for User: #{user.username}..."

  # Loop through the dates of the given month
  (start_date..end_date).each do |date|
    # Random number of finances per day (between 5 and 10)
    rand(2..3).times do
      # Alternate between income and expense
      transaction_type = [:income, :expense].sample
      
      # Determine amount based on transaction type
      amount = case transaction_type
               when :income
                 rand(100.0..5000.0).round(2)
               when :expense
                 rand(10.0..1000.0).round(2)
               end
      
      # Select random categories
      finance_categories = Category.all.sample(rand(2..3))
      recurring_data = nil
      if rand < 0.4  # 40% chance for any finance to be recurring
        recurring_data = {
          frequency: ['daily', 'weekly', 'monthly'].sample,
          start_date: date,
          next_payment_date: date + (rand(1..30).days),  # Random next payment date within the month
          end_date: date + rand(30..180).days,  # Random end date within 1 to 6 months
          amount_variation: rand(0..5) == 0 ? rand(5.0..50.0).round(2) : 0.0,  # 20% chance of amount variation each time
          notes: ["fixed cost", "estimated amount", "variable cost"].sample # Add some variation in notes
        }
      end
      finance = Finance.create!(
        user: user,
        title: case transaction_type
               when :income
                 ["Tips", "Freelance Work", "Investment Income", "Bonus", "Side Hustle"].sample
               when :expense
                 ["Grocery Shopping", "Restaurant Bill", "Online Purchase", "Utility Payment", "Transportation"].sample
               end,
        description: [
          Faker::Quote.famous_last_words,
          Faker::Quote.jack_handey,
          Faker::Quote.matz,
          Faker::Quote.most_interesting_man_in_the_world
        ].sample,
        transaction_type: transaction_type,
        amount: amount,
        transaction_cost: transaction_type == :expense ? rand(0.0..50.0).round(2) : 0.0,
        recurring: recurring_data,  # Adding the recurring data here
        created_at: date,
        updated_at: date
      )
      
      # Associate categories with finance
      finance.categories << finance_categories
    end
  end

  # puts "🎉 Finished seeding finances for #{start_date.strftime("%B %Y")} for User: #{user.username}."
end

# Seed process
puts "✨ Seeding categories... 🏷️"
categories = seed_categories
puts "🎉 Seeded #{Category.count} categories!"

puts "\n✨ Seeding admins... 👤"
admin_users = create_users(:admin, 5)
puts "✨ Seeding normal users... 👤"
regular_users = create_users(:user, 20)

puts "🎉 Seeding complete! #{User.count} users have been added: #{admin_users.count} admins and #{20} users."


puts "\n✨ Seeding finances for months 9, 10, 11... 💰"

# Define the months to generate finances for
months_to_seed = [9, 10, 11] # September, October, November, December
year = Date.today.year


months_to_seed.each do |month|
  puts "\n✨ Seeding finances for #{Date::MONTHNAMES[month]}..."
  
  # For each month, generate finances for all users
  (regular_users).each do |user|
    generate_finances_for_user_in_month(user, categories, month, year)
  end

  puts "🎉 Finished seeding finances for #{Date::MONTHNAMES[month]}."
end

puts "\n🎉 Seeding complete!"
puts "Total Users: #{User.count}"
puts "Total Categories: #{Category.count}"
puts "Total Finances: #{Finance.count}"
# 30.times do
#   Scholarship.create!(
#     title: Faker::Educator.course_name,
#     description: {
#       summary: Faker::GreekPhilosophers.quote,
#       details: Array.new(rand(3..4)) {
#         [Faker::Quote.matz,
#          Faker::Quote.unique.most_interesting_man_in_the_world,
#          Faker::Quote.jack_handey].sample
#       },
#       requirements: Faker::Hacker.say_something_smart,
#       degree_name: Faker::Educator.degree,
#     },
#     eligibility_criteria: {
#       age_range: "#{rand(18..30)}-#{rand(31..40)} years old",
#       country_specific: Faker::Address.country,
#       academic_requirements: Faker::ChuckNorris.fact,
#       other_requirements: Array.new(rand(3..4)) { Faker::Quote.famous_last_words },
#       additional_info: Faker::Books::Dune.quote,
#       application_requirements: Faker::Books::Dune.saying,
#     },
#     funding_amount: Faker::Number.decimal(l_digits: 6, r_digits: 2),
#     deadline: Faker::Date.forward(days: 30),
#     status: Scholarship.statuses.keys.sample,
#     contact_email: Faker::Internet.email,
#     application_link: Faker::Internet.url,
#     country: Faker::Address.country,
#     level: Scholarship.levels.keys.sample,
#     major: Scholarship.majors.keys.sample,
#   )

#   Faker::Quote.unique.clear
# end
# 30.times do
#   admin = User.where(role: :admin).sample
#   scholarship = Scholarship.all.sample

#   meeting = Meeting.create!(
#     admin: admin, 
#     scholarship: scholarship,
#     title: Faker::Quote.robin,
#     description: Faker::Quote.jack_handey,
#     status: Meeting.statuses.keys.sample, 
#     date: Faker::Time.forward(days: 30), 
#     meet_type: Meeting.meet_types.keys.sample,  
#     meeting_link: Faker::Internet.url, 
#   )

#   if meeting.meet_type == "group_meeting"
#     participants = User.where.not(role: :admin).sample(6)
#     participants.each do |user|
#       MeetingParticipant.create!(meeting: meeting, user: user)
#     end
#   end
# end

# Faker::Quote.famous_last_words #=> "My vocabulary did this to me. Your love will let you go on…"

# Faker::Quote.jack_handey #=> "I hope life isn't a big joke, because I don't get it."

# Faker::Quote.matz #=> "You want to enjoy life, don't you? If you get your job done quickly and your job is fun, that's good isn't it? That's the purpose of life, partly. Your life is better."

# Faker::Quote.most_interesting_man_in_the_world #=> "He can speak Russian… in French"

# Faker::Quote.robin #=> "Holy Razors Edge"

# Faker::Quote.singular_siegler #=> "Texas!"

# Faker::Quote.yoda #=> "Use your feelings, Obi-Wan, and find him you will."

# Faker::Quote.mitch_hedberg # => "I like Kit-Kats, unless I'm with four or more people."
