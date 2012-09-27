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

To Run:

	"bundle exec guard"
	Open folder in localhost, enable LiveReload browser plugin
	Edit the HTML, scss, or sjs. CSS and JS will be generated.


Usage
============

## SASS ##

**[Sass](http://sass-lang.com/) makes CSS fun again.** 

## Compass ##

[Compass](http://compass-style.org/) provides us an extensive library for expanding Sass. Specifically, it gives us a lot of helpful mixins for CSS3, Typeography, Reset, Helpers, and Layout. 

## Susy ##

[Susy](http://susy.oddbird.net/) provides us responsive grids on top of Compass without requiring any extra markup. It gets out of your way, handles the math, responsive breakpoints, and a lot more.

## LiveReload ##

When working with SASS, Compass, and Susy, designing your site often requires lots of incremental changes and tweaks. With [LiveReload](https://github.com/guard/guard-livereload), when you make a change, the page refreshes for you. You can keep your focus in your text editor and just watch the magic unfold. While there is a premium LiveReload product you could use, we are using the open-source "guard-livereload" version.

## Jammit ##

If you like the way SASS organizes and compiles your CSS, then you'll like how [Jammit](http://documentcloud.github.com/jammit/) does the same for your JavaScript. It will bundle everything up, minify it, and even gzip for you. Now we can have a single CSS and single JS include, just like you've always wanted.

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

If you attempt to use data-localize with a key that does not exist in your localization language, the contents of your html element will not be replaced.

By default the page will auto-load the localization for the language listed in your HTML tag (English in the following example):

    <html class="no-js" lang="en">

This can be overridden by calling the global function `localizePage( lang )` with the optional localization lang parameter.

Author
======

James Tomasino, github@jamestomasino.com, [http://jamestomasino.com](http://jamestomasino.com)

