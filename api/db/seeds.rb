# Require all modules in seeds folder
Dir["#{Rails.root}/db/seeds/**/*.rb"].each { |f| require(f) }

# for environment-based seeding, refer to:
# http://stackoverflow.com/questions/8662127/how-to-use-seed-rb-to-selectively-populate-development-and-or-production-databas
module Seeds
  p '------  Seeding data... ------'
  InitUsers.seed

  p '------ Done ------'
end
