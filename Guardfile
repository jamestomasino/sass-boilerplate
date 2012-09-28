notification :off

guard :bundler do
  watch('Gemfile')
end

guard 'compass' do
  watch(%r{(.*)\.s[ac]ss$})
end

guard 'livereload' do
  watch(%r{.+\.(css|js|html?|php|inc)$})
end

guard 'sprockets', :destination => 'js', :asset_paths => ['sjs'], :root_file   => 'sjs/main.js', :minify => false do
  watch(%r{^sjs/.*\.(js|coffee)})
end
