class Address < ApplicationRecord
  belongs_to :location

  validates :street, :state, :city, :county, :region, :zip, presence: true
end
