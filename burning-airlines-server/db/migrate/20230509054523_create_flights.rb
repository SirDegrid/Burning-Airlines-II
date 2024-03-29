class CreateFlights < ActiveRecord::Migration[5.2]
  def change
    create_table :flights do |t|
      t.integer :number
      t.text :origin
      t.text :destination
      t.date :flight_date
      t.integer :plane_id

      t.timestamps
    end
  end
end
