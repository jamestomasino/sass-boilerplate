notification :off

guard :bundler do
watch('Gemfile')
end

if File.exists?("./config.rb")
guard 'compass' do
  watch(%r{(.*)\.s[ac]ss$})
end
end

guard 'livereload' do
watch(%r{.+\.(css|js|html?|php|inc)$})
end

guard 'sprockets', :destination => 'js', :asset_paths => ['sjs'], :minify => false do
watch(%r{^sjs/.*\.(js|coffee)})
end
