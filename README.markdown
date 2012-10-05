Prerequisites
=============

This project requires Ruby and RubyGems and the LiveReload browser plugin: [Chrome](https://chrome.google.com/webstore/detail/jnihajbhpnppcggbcgedagnkighmdlei), [Safari](https://github.com/downloads/mockko/livereload/LiveReload-1.6.2.safariextz), [Firefox](https://addons.mozilla.org/firefox/addon/livereload/), IE... Seriously?

If you are using OSX, you should also install [Command Line Tools](http://connect.apple.com) before the installation instructions.

Installation
============

To install:

	Clone this project
    "gem update --system" (may require sudo)
	"gem install bundle" (may require sudo)
	"bundle install"

Troubleshooting:

If your bundle install explodes when trying to install `eventmachine`, you haven't installed Command Line Tools. See the prerequisites.

To Run:

	"bundle exec guard"
	Open folder in localhost, enable LiveReload browser plugin
	Edit the HTML, scss, or sjs. CSS and JS will be generated.

After-thoughts:

If you are storing this new project in SVN or git, you probably want to ignore the `Gemfile.lock`, `.sass-cache`, `css`, and `js` files and folders. These are all generated after running through the above installation steps, and being generated files, they are redundant in source control. The `Gemfile.lock` file in particular is important to ignore since it may contain platform specific gem configurations that could cause problems if developers are on Windows vs. Mac, etc.


Usage
============

## SASS ##

**[SASS](http://SASS-lang.com/) makes CSS fun again.** The SASS main file `scss/main.scss` loads in the other partials to keep everything organized during development. The `scss/_variables.scss` file holds all of the SASS variables that will be used throughout the project. Layout and type treatments are kept isolated. The `scss/layout/_layout.scss` and `scss/type/_type.scss` files are the main files for their section. They handle the relative imports for each section for easier extensibility.

By default, the configuration in `config.rb` is set to generate expanded, commented css. It is our best practice to remove comments and serve compressed css for production.

## Compass ##

[Compass](http://compass-style.org/) provides us an extensive library for expanding SASS. Specifically, it gives us a lot of helpful mixins for CSS3, Typeography, Reset, Helpers, and Layout.

By default, the boilerplate takes advantage of the [Compass Reset](http://compass-style.org/reference/compass/reset/), [vertical-rhythm](http://compass-style.org/reference/compass/typography/vertical_rhythm/), and CSS3 helpers.

Running `bundle exec guard` starts the Compass Watch command.

## Susy ##

[Susy](http://susy.oddbird.net/) provides us responsive grids on top of Compass without requiring any extra markup. It gets out of your way, handles the math, responsive breakpoints, and a lot more. Though it is available by default, we do not have any Susy layout code implemented in the boilerplate. More information about creating responsive grids [can be found here](http://www.outlier.com/thinktank/2012-08/creating-adaptive-grid-compass-and-susy).

[Here's one more](http://scottdavis.github.com/blog/2011/12/30/introduction-to-building-websites-using-susy-and-compass-vertical-rhythm/) about using it with Compass's Vertical Rhythm system.

## LiveReload ##

When working with SASS, Compass, and Susy, designing your site often requires lots of incremental changes and tweaks. With [LiveReload](https://github.com/guard/guard-livereload), when you make a change, the page refreshes for you. You can keep your focus in your text editor and just watch the magic unfold. While there is a premium LiveReload product you could use, we are using the open-source "guard-livereload" version.

Running `bundle exec guard` starts the LiveReload watcher.

## Sprockets ##

If you like the way SASS organizes and compiles your CSS, then you'll like how [Sprockets](https://github.com/sstephenson/sprockets) ([guard-sprockets](https://github.com/guard/guard-sprockets)) does the same for your JavaScript. It will bundle everything up and minify it. Now we can have a single CSS and single JS include, just like you've always wanted.

The main javascript file, `sjs/main.js` is configured to be the only javascript file that is compiled. By using the comment-driven Sprockets includes, `//= require jquery`, it will pull in all the libraries or additional files you might need.

Running `bundle exec guard` starts the Sprockets watcher.

## Localization ##

The boilerplate uses a modifed [l10n.js](https://github.com/eligrey/l10n.js/). A sample link is included in the HTML connecting to a localization json file. Your localzation json file should have contents like the following:

    {
      "en": "path/to/english-localization.json",
      "es": "path/to/spanish-localization.json"
    }

Each localization language file should have contents like the following:

    {
        "%title": "Español example",
        "%info": "Usted está viendo una versión en español de esta página."
    }

To make content in your HTML localized, add the attribute `data-localize="replacementstring"` where replacement string is a key in your localization json. By default, all localization keys should begin with `%`. Do not include the `%` in the data-localize attribute in your HTML, though.

    <h1 data-localize="title">Some Localized Header</h1>
    <p data-localize="info">Some Localized Info</p>

If you attempt to use data-localize with a key that does not exist in your localization language, the contents of your html element will not be replaced.

To trigger the page localization, simply call the `localizePage()` global method. It will, by default, use the localization closest to the user's location. This can be overridden by passing the locale as a string parameter to that method. (e.g., `localizePage('es')`).


Author
======

James Tomasino, github@jamestomasino.com, [http://jamestomasino.com](http://jamestomasino.com)

