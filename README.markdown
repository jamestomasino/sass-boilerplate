Prerequisites
=============

This project requires Ruby and RubyGems and the LiveReload browser plugin: [Chrome](https://chrome.google.com/webstore/detail/jnihajbhpnppcggbcgedagnkighmdlei), [Safari](https://github.com/downloads/mockko/livereload/LiveReload-1.6.2.safariextz), [Firefox](https://addons.mozilla.org/firefox/addon/livereload/), IE... Seriously?

If you are using OSX, you should also install [Command Line Tools](http://stackoverflow.com/questions/9329243/xcode-4-4-command-line-tools) before the installation instructions.

Installation
============

To install:

	Clone this project
	"gem install bundle" (may require sudo)
	"bundle install"
	"gem install guard" (may not be necessary. may also require sudo)
	"guard"
	
Then:

	Open folder in localhost, enable LiveReload browser plugin
	Edit html or scss files to see live reload


Usage
============

## Localization ##

The boilerplate uses a modifed [l10n.js](https://github.com/eligrey/l10n.js/). A sample link is included in the HTML connecting to a localization json file. [Click here for instructions on how to set up your localization files](https://github.com/eligrey/l10n.js/#including-localizations-with-link-elements). 

To make content in your HTML localized, add the attribute `data-localize="replacementstring"` where replacement string is a key in your localization json. By default, all localization keys should begin with `%`. Do not include the `%` in the data-localize attribute in your HTML, though.

If you attempt to use data-localize with a key that does not exist in your localization language, the contents of your html element will not be replaced.



Author
======

James Tomasino, github@jamestomasino.com, [http://jamestomasino.com](http://jamestomasino.com)

