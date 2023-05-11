class User < ApplicationRecord
    has_many :reservations
    has_secure_password
    validates :email, :uniqueness => true, :presence => true
end