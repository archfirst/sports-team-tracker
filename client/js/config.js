/**
 * Copyright 2013 Archfirst
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Application Configuration
 *
 * @author Naresh Bhatia
 */

/*jshint unused:false */

// Set up the "require" variable which RequireJS will pick up when it is loaded in main.js.
// This ensures that the configuration loads before any other scripts are required in.
var require = {
    // Initialize the application with the main application file
    deps: ['main'],

    paths: {
        // jQuery
        jquery:                      'vendor/jquery-1.10.2',
        chosen:                     'vendor/chosen.jquery',

        // Bootstrap
        bootstrap:                   'vendor/bootstrap',
        datepicker:                  'vendor/bootstrap-datepicker',

        // Underscore
        underscore:                  'vendor/underscore-1.4.4',

        // Backbone
        backbone:                    'vendor/backbone-1.0.0',
        relational:                  'vendor/backbone-relational',
        stickit:                     'vendor/backbone.stickit-0.6.3',
        validationCore:              'vendor/backbone-validation-0.8.0',
        validation:                  'vendor/backbone.validation.bootstrap',

        // Templating
        handlebars:                  'vendor/handlebars-1.0.rc.1',

        // Date library
        moment:                      'vendor/moment-2.0.0.min'
    },

    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },

        bootstrap: {
            deps: ['jquery']
        },

        datepicker: {
            deps: ['bootstrap']
        },

        handlebars: {
            exports: 'Handlebars'
        },

        moment: {
            exports: 'moment'
        },

        relational: {
            deps: ['backbone']
        },

        chosen: {
            deps: ['jquery']
        },

        stickit: {
            deps: ['backbone']
        },

        underscore: {
            exports: '_'
        },

        validationCore: {
            deps: ['backbone']
        },

        validation: {
            deps: ['validationCore']
        }
    }
};