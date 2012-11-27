notification :off
interactor :off

guard 'bundler' do
  watch('Gemfile')
end

guard 'compass' do
  watch(%r{^src/scss/(.*)\.s[ac]ss$})
end

guard 'livereload' do
  watch(%r{^build/css/(.*)\.css$})
  watch(%r{^build/js/(.*)\.js$})
  watch(%r{^build/images/(.*)\.(jpg|gif|png)$})
  watch(%r{^build/.+\.(html?|php|inc)$})
end

guard 'sprockets', :destination => 'build/js', :asset_paths => ['src/sjs'], :root_file   => 'src/sjs/main.js', :minify => false do
  watch(%r{^src/sjs/.*\.(js|coffee)})
end

guard 'sprockets', :destination => 'build/js', :asset_paths => ['src/sjs'], :root_file   => 'src/sjs/preload.js', :minify => false do
  watch(%r{^src/sjs/.*\.(js|coffee)})
end

guard 'haml', :input => 'src', :output => 'build' do
  watch %r{^src/.+(\.html\.haml)}
end

guard 'copy', :from => 'src', :to => 'build', :mkpath => true do
  watch %r{^/.+\.(html?|php|inc)$}
  watch %r{^/.+\.(mp4|ogv|mov|wmv|avi|flv)$}
  watch %r{^/.+\.(jpg|gif|png)$}
end
