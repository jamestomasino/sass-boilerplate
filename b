#!/bin/sh
# Compile Sass/Compass/Susy Compressed
compass compile --output-style compressed --no-line-comments --force
sprocketize
rsync -qrupm --exclude 'scss' --exclude 'sjs' --exclude '*.haml' src/ build/
gzip -9 -c build/css/main.css > build/css/main.css.gz 
