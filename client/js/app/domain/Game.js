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
 * app/domain/Game
 *
 * Attributes:
 *   id: int
 *   date: Date,
 *   homeTeam: Team,
 *   awayTeam: Team
 *
 * @author Naresh Bhatia
 */
define(
    [
        'app/domain/Team',
        'backbone',
        'relational',
        'validation'
    ],
    function(Team, Backbone) {
        'use strict';

        return Backbone.RelationalModel.extend({
            relations: [
                {
                    type: Backbone.HasOne,
                    key: 'homeTeam',
                    relatedModel: Team,
                    includeInJSON: Backbone.Model.prototype.idAttribute
                },
                {
                    type: Backbone.HasOne,
                    key: 'awayTeam',
                    relatedModel: Team,
                    includeInJSON: Backbone.Model.prototype.idAttribute
                }
            ],

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
            }
        });
    }
);