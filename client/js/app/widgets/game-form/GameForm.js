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
define(
    [
        'app/domain/GameNonRelational',
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
                'click .js-validateButton': 'validateGame',
                'click .js-resetButton': 'resetGame'
            },

            bindings: {
                '.js-gameDate': {
                    observe: 'date',
                    datepickerOptions: {
                        autoclose: true
                    },
                    setOptions: { validate: true }
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
                    setOptions: { validate: true }
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
                    setOptions: { validate: true }
                }
            },

            initialize: function() {
                this.model = new Game();
                Backbone.Validation.bind(this);
            },

            validateGame: function() {
                this.$('.alert').hide();

                if (this.model.isValid(true)) {
                    this.$('.alert-success').fadeIn();
                }
                else {
                    this.$('.alert-error').fadeIn();
                }
                return false;
            },

            resetGame: function() {
                this.$('.alert').hide();
                this.model.reset();
                return false;
            },

            postRender: function() {
                this.stickit();
            }
        });
    }
);