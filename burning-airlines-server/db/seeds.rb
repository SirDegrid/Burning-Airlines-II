# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
u1 = User.create(:email => 'aa@ga.co', :password => 'chicken', :admin => true)
u2 = User.create(:email => 'ab@ga.co', :password => 'chicken', :admin => false)
u3 = User.create(:email => 'ac@ga.co', :password => 'chicken', :admin => false)
u4 = User.create(:email => 'ad@ga.co', :password => 'chicken', :admin => false)

puts "#{User.count} users"

Airplane.destroy_all
a1 = Airplane.create(:name => "Qantas", :row => 5, :column => "C")
a2 = Airplane.create(:name => "Jetstar", :row => 12, :column => "X")
a3 = Airplane.create(:name => "Tigerair", :row => 10, :column => "Y")
puts "#{Airplane.count} airplanes"

Flight.destroy_all
f1 = Flight.create(:number => 414, :origin => "Sydney", :destination => "Melbourne", :flight_date => "2023-05-13")
f2 = Flight.create(:number => 500, :origin => "Hobart", :destination => "Darwin", :flight_date => "2023-06-15")
f3 = Flight.create(:number => 777, :origin => "Perth", :destination => "Brisbane", :flight_date => "2023-07-20")
f4 = Flight.create(:number => 123, :origin => "Adelaide", :destination => "Cairns", :flight_date => "2023-08-10")
f5 = Flight.create(:number => 691, :origin => "Darwin", :destination => "Sydney", :flight_date => "2023-06-16")
f6 = Flight.create(:number => 666, :origin => "Brisbane", :destination => "Melbourne", :flight_date => "2023-07-20")
puts "#{Flight.count} flights"

#plane id and reservation id

# associations
#flight belongs to
<<<<<<< HEAD
# f1.airplane = a1
# f2.airplane = a1
# f3.airplane = a2
# f4.airplane = a2
# f5.airplane = a3
# f6.airplane = a3
=======
# f1.airplane << a1 # the flight id should be added to airplane <<
# f2.airplane << a1
# f3.airplane << a2
# f4.airplane << a2
# f5.airplane << a3
# f6.airplane << a3

# a1.flights <<
>>>>>>> 4ae0fb82e0ec9d78f56ae476033f28dbc7fc394c

#airplane has many
a1.flights << f1 << f2  #adding to the collection of a1
a2.flights << f3 << f4
a3.flights << f5 << f6

#user has many reservations - reservations should come from/updated by  flight?

