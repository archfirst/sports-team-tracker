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
 * app/widgets/game-form/GameForm
 *
 * @author Naresh Bhatia
 */

/*jshint devel:true */

define(
    [
        'app/domain/Game',
        'app/domain/Repository',
        'backbone',
        'keel/BaseView',
        'text!app/widgets/game-form/GameFormTemplate.html',
        'chosen',
        'datepicker',
        'stickit',
        'validation'
    ],
    function(Game, Repository, Backbone, BaseView, GameFormTemplate) {
        'use strict';

        return BaseView.extend({
            tagName: 'form',
            className: 'game-form',

            template: {
                name: 'GameFormTemplate',
                source: GameFormTemplate
            },

            events: {
                'click .js-newGameButton': 'newGame',
                'click .js-saveButton': 'saveGame'
            },

            bindings: {
                '.js-gameDate': {
                    observe: 'date',
                    datepickerOptions: {
                        autoclose: true
                    },
                    setOptions: { validate: false }
                },

                '.js-homeTeam': {
                    observe: 'homeTeam',
                    selectOptions: {
                        collection: Repository.getTeams(),
                        labelPath: 'name',
                        valuePath: 'id',
                        defaultOption: {
                            label: 'Choose one...',
                            value: null
                        }
                    },
                    setOptions: { validate: false }
                },

                '.js-awayTeam': {
                    observe: 'awayTeam',
                    selectOptions: {
                        collection: Repository.getTeams(),
                        labelPath: 'name',
                        valuePath: 'id',
                        defaultOption: {
                            label: 'Choose one...',
                            value: null
                        }
                    },
                    setOptions: { validate: false }
                }
            },

            _createNewGame: function() {
                this.model = new Game();
            },

            initialize: function() {
                this._createNewGame();
// Backbone.Validation.bind(this);
                this.listenTo(this.model, 'validated:invalid', this.handleModelError);
                this.listenTo(this.model, 'change', this.logGame);
            },

            handleModelError: function(model, errors) {
                console.log('validation failed:' + errors.date + ', ' + errors.homeTeam + ', ' + errors.awayTeam);
            },

            newGame: function() {
                this._createNewGame();
                return false;
            },

            saveGame: function() {
                Repository.getGames().create(this.model, {wait: true});
                return false;
            },

            postRender: function() {
                this.stickit();
            },

            logGame: function(game) {

                var homeTeam = game.get('homeTeam');
                var awayTeam = game.get('awayTeam');

                console.log(
                    'date: ' + game.get('date') +
                    ', homeTeam: ' + (homeTeam ? homeTeam.get('name') : 'null') +
                    ', awayTeam: ' + (awayTeam ? awayTeam.get('name') : 'null'));
            }
        });
    }
);