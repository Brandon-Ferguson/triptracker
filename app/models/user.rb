class User < ApplicationRecord

  validates :email, :password, presence: true
  validates :email, :password, uniqueness: true
end
