notification :off
interactor :off

guard :bundler do
  watch('Gemfile')
end

guard 'compass' do
  watch(%r{^scss/(.*)\.s[ac]ss$})
end

guard 'livereload' do
  watch(%r{^css/(.*)\.css$})
  watch(%r{^js/(.*)\.js$})
  watch(%r{^images/(.*)\.(jpg|gif|png)$})
  watch(%r{.+\.(html?|php|inc)$})
end

guard 'sprockets', :destination => 'js', :asset_paths => ['sjs'], :root_file   => 'sjs/main.js', :minify => false do
  watch(%r{^sjs/.*\.(js|coffee)})
end

guard 'sprockets', :destination => 'js', :asset_paths => ['sjs'], :root_file   => 'sjs/preload.js', :minify => false do
  watch(%r{^sjs/.*\.(js|coffee)})
end
