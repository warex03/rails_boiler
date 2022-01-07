class User < ApplicationRecord
  has_secure_password

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  validates :name, presence: true, length: { maximum: 50 }
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }

  def self.authenticate(email, password)
    user = User.find_by(email: email.downcase)
    if user && user.authenticate(password)
      user_info = {
        user_id: user.id,
        name: user.name,
        email: user.email
      }
      return user_info
    end

    return false
  end
end
