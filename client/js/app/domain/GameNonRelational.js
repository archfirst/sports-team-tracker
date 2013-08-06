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
 * app/domain/GameNonRelational
 *
 * A non-relational version of the Game class to show integration of
 * backbone-stickit and backbone-validation (taking backbone-relational
 * out of the equation).
 *
 * Attributes:
 *   id: int
 *   date: Date,
 *   homeTeam: int,
 *   awayTeam: int
 *
 * @author Naresh Bhatia
 */
define(
    [
        'backbone',
        'validation'
    ],
    function(Backbone) {
        'use strict';

        return Backbone.Model.extend({
            validation: {
                date: {
                    required: true
                },
                homeTeam: {
                    required: true
                },
                awayTeam: {
                    required: true
                }
            },

            reset: function() {
                this.unset('date');
                this.unset('homeTeam');
                this.unset('awayTeam');
            }
        });
    }
);