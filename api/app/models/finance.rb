class Finance < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :categories


  enum :transaction_type, { income: 0, expense: 1 }
end
