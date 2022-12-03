class Location < ApplicationRecord
  belongs_to :trip
  has_many :addresses, dependent: :destroy

  validates :loc_name, presence: true
end
