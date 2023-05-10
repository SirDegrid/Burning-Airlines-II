class AddReservationIdToFlights < ActiveRecord::Migration[5.2]
  def change
    add_column :flights, :reservation_id, :integer
  end
end
