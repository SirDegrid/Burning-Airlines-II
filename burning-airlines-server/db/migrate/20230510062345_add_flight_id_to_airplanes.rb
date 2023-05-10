class AddFlightIdToAirplanes < ActiveRecord::Migration[5.2]
  def change
    add_column :airplanes, :flight_id, :integer
  end
end
