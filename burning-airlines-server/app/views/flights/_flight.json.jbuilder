json.extract! flight, :id, :number, :origin, :destination, :flight_date, :plane_id, :created_at, :updated_at
json.url flight_url(flight, format: :json)
