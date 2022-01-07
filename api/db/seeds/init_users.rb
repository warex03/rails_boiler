module Seeds
  class InitUsers
    def self.seed
      User.create!(name: "User 1", email: "user@example.com", password: "pass")
    end
  end
end
