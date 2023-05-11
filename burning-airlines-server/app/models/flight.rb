class Flight < ApplicationRecord
    has_many :reservations
    belongs_to :airplane, :optional => true
end
