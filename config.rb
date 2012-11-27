require "susy"
require "sassy-buttons"

module Sass::Script::Functions
    def randomColor()
        Sass::Script::String.new("#%06x" % (rand * 0xffffff))
    end
end

module Sass::Script::Functions
  def random()
      rand(1.0)
  end
end

http_path        = "/"
css_dir          = "build/css"
sass_dir         = "src/scss"
javascripts_dir  = "build/js"
images_dir       = "build/images"
fonts_dir        = "build/fonts"
project_type     = :stand_alone
environment      = :development
output_style     = :expanded
relative_assets  = true
line_comments    = true
disable_warnings = false
preferred_syntax = :scss
