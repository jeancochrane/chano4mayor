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

## Installation

The chano4mayor development environment is containerized using Docker. It also includes a set of convenience scripts to help you get up and running quickly.

0. Before getting started, make sure [you have Docker Compose installed](https://docs.docker.com/compose/install/).

1. Start by cloning our repo:

```bash
# Assumes SSH - use the HTTPS link instead if you like it like that
git clone git@github.com:jeancochrane/chano4mayor.git
```

2. Getting Tweet counts to appear on Chance's hat requires a Twitter API
[bearer token](https://developer.twitter.com/en/docs/basics/authentication/overview/application-only.html).
Once you've got a bearer token, copy the `.env.example` file and add your API
token:

```bash
# <your_token_here> is the placeholder used in the example file, while $TOKEN
# represents your actual API token -- i.e., replace $TOKEN with your bearer
# token in the following command, but leave the rest the same
sed 's/<your_token_here>/$TOKEN' .env.example > .env

```

3. Next, change into the directory and install dependencies with the `update` script:

```bash
cd chano4mayor
./scripts/update
```

4. To serve a copy of the site locally, use the `server` script. The site will be accessible on [`localhost:1234`](http://localhost:1234):

```bash
./scripts/server
```

(The `server` script also accepts optional arguments that allow you to run each service in isolation. This is helpful e.g. if you only want to debug the Lambda function that runs the Tweet counting script. For more information, run `./scripts/server --help`.)

5. When you're ready to push changes, confirm that you've built all the relevant assets using the `cibuild` script:

```bash
./scripts/cibuild
```

6. Finally, if you'd like to clean up Docker data and containers after you finish developing, use the `clean` script:

```bash
# Stop all services and clean up unused container images/volumes
./scripts/clean
```

## A note about compiled assets

The development setup should compile minified assets for you based on your source files. When you're working on code, make sure you're editing the source files in the `src/` directory.

**Do not edit** directly edit the compiled/minified files in the home directory, or in the `functions/` output directory! Instead, make changes to the corresponding files in `src/` and then run `./scripts/cibuild` to make sure that the files get compiled for distribution.

## Contributing

We welcome [issues](https://github.com/jeancochrane/chano4mayor/issues) and [pull requests](https://github.com/jeancochrane/chano4mayor/pulls) if you want to suggest changes to the site. 

The best way to suggest changes is to follow these steps:

1. [Fork](https://help.github.com/articles/fork-a-repo/) the project
2. Make a new [feature branch](https://gist.github.com/digitaljhelms/4287848#feature-branches) for your changes so we can merge them easily
3. Make your feature addition or bug fix
4. [Open a pull request](https://help.github.com/articles/creating-a-pull-request/) with a description of your work

Before making pulls, make sure to build your code for distribution:

```bash
./scripts/cibuild
```

## Style

Always follow the coding style you see in the files. Some general principles are: 
 - Use logical indentation. If the file is indented with 4 spaces, use 4 spaces; if it's indented with tabs, use tabs.
 - Always aim for clarity, and leave a comment any time you do something clever.
 - Keep it accessible! Images should always have alt text, never indicate information with color alone, add title attributes to links, and make sure the color contrast ratios are at least up to AA standards. Use [this checklist](http://webaim.org/standards/wcag/checklist) for reference.

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
- [JQuery Accessible Hide/Show Using ARIA](https://github.com/nico3333fr/jquery-accessible-hide-show-aria) - Accessible JS is crucial!
- [Sass](http://sass-lang.com/) - Syntactically-awesome stylesheets

Many thanks to the developers on these projects for enabling our mischief.

## License

Technically released under the MIT License. Do what you will!
