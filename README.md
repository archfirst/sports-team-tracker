# Sports Team Tracker

This is a sample application to show how various backbone related frameworks can be combined to create a powerful single-page application. The application itself tracks information related to sports teams, e.g. team roster, game schedules etc. We use the following frameworks and technogies to implement the tracker:

* Node.js
* jQuery
* [Backbone.js](http://backbonejs.org/)
* [RequireJS](http://requirejs.org/)
* [Keel](https://github.com/archfirst/keel) - a light framework around Backbone.js to encourage best practices and conventions
* [Handlebars](http://handlebarsjs.com/) - a logic-less web template system
* [Sass](http://sass-lang.com/) / [Compass](http://compass-style.org/): CSS productivity frameworks
* [Backbone-relational.js] (http://backbonerelational.org/): provides complex relations between Backbone models
* [Backbone.Validation](http://thedersen.com/projects/backbone-validation/): validates models and form input
* [backbone.stickit](http://nytimes.github.io/backbone.stickit/): binds Model attributes to View elements provoding two-way binding

## Build Instructions

### Install Build Tools
* Install [Node.js](http://nodejs.org/).
* Install [Grunt](https://github.com/gruntjs/grunt/wiki/Getting-started).

    $ npm install -g grunt-cli
* Install [Ruby](http://rubyinstaller.org/downloads/). (required for compass/sass)
* Install [Compass](http://compass-style.org/install/) (used for CSS authoring).

    $ gem install compass

### Build Sports Team Tracker
* Download the sports-team-tracker repository as a zip file or fork it if you plan to make contributions.
* Open a command shell and change your directory to your local Sports Team Tracker repository.
* Install Grunt plugins:

    $ npm install
* Execute the following command to build Sports Team Tracker:

    $ grunt
* Start the server using the following command:

    $ node server/server.js
* Start Sports Team Tracker by pointing your browser to [http://localhost:8080](http://localhost:8080). You should see the Home page.