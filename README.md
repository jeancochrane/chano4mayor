# #chano4mayor

> They say I'm savin' my city, say I'm stayin' for good
>
> They screamin' "Chano for Mayor," I'm thinkin' maybe I should
>
>\- [*Somewhere in Paradise* (2015)](https://soundcloud.com/chancetherapper/somewhere-in-paradise-ft-jeremih-r-kelly-1)

We want Chance the Rapper to run for Mayor of Chicago in 2019. He doesn't seem to have any intention of doing it. So, we did what any group of concerned citizens would do: we made a website to encourage him to run.

![A picture of Chance the Rapper saying "I got some ideas that you gotta see"](https://cloud.githubusercontent.com/assets/14170650/24591169/860cb7cc-17c0-11e7-8450-b549622df7fe.png)

## The concept

We want a mayor who will fight for public education. We want a mayor who will reinvest in black and brown communities on the South and West Sides. We want a mayor who will address our epidemic of gun violence without the brutality of police or prisons. We want a mayor who will let the young people of Chicago lead.

We want a mayor like Chance.

Not convinced that Chance should be the next mayor of Chicago? [Check out the site](https://chano4mayor.com/) to read why we think you should change your mind, or [let us know](https://twitter.com/chano4mayor2k19) who you think should run against Rahm in 2019.

## Twitter bot

If you like this site, you might also like our Twitter bot [@Chano4Mayor2k19](https://twitter.com/chano4mayor2k19) that makes memes about #chano4mayor.

To see that code or steal it for your own mischief, [head on over to its repo.](https://github.com/jeancochrane/chanomemes)

# Developer information (for the nerds)

The following instructions will help you use our code to either a) suggest changes to this site or b) draft your own favorite rapper to run for office.

## Before you start

We used the following OS-level open source tools to build this site. You should install them on your computer using your favorite package manager before getting started:

- [npm](https://docs.npmjs.com/getting-started/installing-node) - JavaScript package manager

## Installation

Start by cloning our repo:

```bash
# Assumes SSH - use the HTTPS link instead if you like it like that
git clone git@github.com:jeancochrane/chano4mayor.git
```

Next, change into the directory and install dependencies with npm:

```bash
cd chano4mayor
npm install
```

Use [Grunt](https://gruntjs.com/) to compile and minify JS/CSS while you work:

```bash
grunt
```

Finally, open up the page in your favorite browser to view your work:

```bash
# Mac users:
open index.html

# Linux aficionados:
xdg-open index.html
```

If like you use the [LiveReload plugin](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) for developing sites, Grunt will automatically start that for you, too.

## Directory structure

This is a pretty simple static site, so most of the action happens in `index.html`. Develop CSS/JS in the `src/` directory, and Grunt will work its magic to produce minified files that live in the topmost level of the repo.

Here's an overview of the important files in the directory:

```bash
chano4mayor/
├── index.html
├── src
│   ├── js
│   │   ├── jquery-accessible-hide-show-aria.js
│   │   ├── refs.js
│   │   └── tweetcount.js
│   └── scss
│       ├── styles-unprefixed.css
│       ├── styles-unprefixed.css.map
│       └── styles.scss
├── styles.min.css
├── styles.min.css.map
├── scripts.min.js
└── images
   ├── chano_hat.svg
   ├── favicon
   │   └── chano_four.png
   ├── illustrations
   │   ├── chano1.png
   │   ├── chano10.png
   │   ├── chano4.png
   │   ├── chano5.png
   │   ├── chano8.png
   │   └── chano9.png
   ├── sparkles.png
   ├── triangle.svg
   └── twitter_white.svg

```

## Contributing

We welcome [issues](https://github.com/jeancochrane/chano4mayor/issues) and [pull requests](https://github.com/jeancochrane/chano4mayor/pulls) if you want to suggest changes to the site. 

The best way to suggest changes is to follow these steps:

1. [Fork](https://help.github.com/articles/fork-a-repo/) the project
2. Make a new [feature branch](https://gist.github.com/digitaljhelms/4287848#feature-branches) for your changes so we can merge them easily
3. Make your feature addition or bug fix
4. [Open a pull request](https://help.github.com/articles/creating-a-pull-request/) with a description of your work

Before making pulls, makes ure to use Grunt to build your code for distribution:

```bash
grunt build
```

This will automatically generate a bunch of necessary files.

## Deployment

Contributors to this project can deploy by tagging a commit and pushing to master (untagged commits will trigger a Travis build, but won't deploy):

```bash
# Make a commit
git commit -am "I did some stuff!"

# Tag it with a short description!
git tag short-description-of-your-work

# Push the commit and the tag
git push --tags origin master
```

Non-contributors won't be able to deploy no matter how hard they try. Sorry! Make a pull request instead.

## Team

You have these fine folks to blame for this mess:

- [Alex Soble](https://github.com/alexsoble)
- [Bea Malsky](https://github.com/beamalsky)
- [Jean Cochrane](https://github.com/jeancochrane)
- [Kalil Smith-Nuevelle](https://github.com/kalilsn)

Opinions about #chano4mayor are entirely our own, and have nothing to do with the views of our employers, parents, or childhood mentors. 

## Acknowledgements

We used the following open source tools to build this site, and they made our lives so much easier:

- [npm](https://npmjs.com/) - The JavaScript package manager
- [Grunt](https://gruntjs.com/) - The JavaScript task runner
- [JQuery](https://jquery.com/) - The world's most ubiquitious DOM manipulator
- [JQuery Accessible Hide/Show Using ARIA](https://github.com/nico3333fr/jquery-accessible-hide-show-aria) - Accesible JS is crucial!
- [Sass](http://sass-lang.com/) - Syntactically-awesome stylesheets

Many thanks to the developers on these projects for enabling our mischief.

## License

Technically released under the MIT License. Do what you will!
