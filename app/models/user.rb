class User < ApplicationRecord

  validates :email, :password, presence: true
  validates :email, uniqueness: true
end
