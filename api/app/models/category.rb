class Category < ApplicationRecord
  has_and_belongs_to_many :finances

  enum :status, { pending: 0, approved: 1, denied: 2 }

end
