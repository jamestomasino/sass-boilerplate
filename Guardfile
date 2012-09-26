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

guard :jammit, :package_on_start => true, :config_path => 'js.config', :output_folder => 'js' do
  watch(%r{^sjs/(.*)\.js$})
end
