notification :off

# Current watch directory must contain the Compass config file.
if File.exists?("./config.rb")
  # https://github.com/guard/guard-compass
  guard 'compass' do
    watch(%r{(.*)\.s[ac]ss$})
  end
end

guard 'livereload' do
  watch(%r{.+\.(css|js|html?|php|inc)$})
end
