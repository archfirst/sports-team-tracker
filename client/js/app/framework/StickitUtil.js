/**
 * app/framework/StickitUtil
 *
 * Utility functions for Stickit
 *
 * @author Naresh Bhatia
 */
/*jshint camelcase: false */
define(
    [
        'backbone',
        'underscore',
        'stickit',
        'datepicker'
    ],
    function(Backbone, _) {
        'use strict';

        // ---------------------------------------------------------------
        // bootstrap-datepicker handler
        // ---------------------------------------------------------------
        Backbone.Stickit.addHandler({
            selector: '.datepicker',

            // Datepicker events that will update the model using getVal()
            events: ['changeDate'],

            initialize: function ($el, model, options) {
                $el.datepicker(options.datepickerOptions);
            },

            // Sets the value of the datepicker based on the model
            update: function($el, val, model, options) {
                _.defer(function() {
                    $el.datepicker('setDate', model.get(options.observe));
                });
            },

            // Gets the value of the datepicker
            getVal: function($el) {
                return $el.datepicker('getDate');
            }
        });

        // ---------------------------------------------------------------
        // chosen handler
        // ---------------------------------------------------------------
        Backbone.Stickit.addHandler({
            selector: 'select.chosen',

            initialize: function($el, model, options) {

                var changeEvent = 'change:' + options.observe;

                $el.chosen({
                    width: '100%'
                });

                var handleModelChange = function(model, value, options) {
                    if (!options.bindKey) {
                        // liszt:updated is an event specific to the Chosen drop-down asking it to rebuild it
                        $el.trigger('liszt:updated');
                    }
                };

                this.listenTo(model, changeEvent, handleModelChange);
            }
        });
    }
);