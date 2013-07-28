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
 * app/domain/Repository
 *
 * This is a singleton object that maintains the domain layer of the application.
 * Domain objects in this layer generally live beyond the life of views in the
 * presentation layer. When views are created, they are generally connected to
 * domain objects that are already present in this repository.
 *
 * @author Naresh Bhatia
 */

/*jshint devel:true */

define(
    [
        'backbone',
        'relational'
    ],
    function(Backbone) {
        'use strict';

        // ********************************************************************
        // Define Person
        // ********************************************************************
        var Person = Backbone.RelationalModel.extend({
        });

        var PersonCollection = Backbone.Collection.extend({
            model: Person,
            url: 'data/people.json'
        });

        // ********************************************************************
        // Define Team
        // ********************************************************************
        var Team = Backbone.RelationalModel.extend({
            relations: [
                {
                    type: Backbone.HasOne,
                    key: 'coach',
                    relatedModel: Person,
                    includeInJSON: Backbone.Model.prototype.idAttribute
                },
                {
                    type: Backbone.HasMany,
                    key: 'players',
                    relatedModel: Person,
                    includeInJSON: Backbone.Model.prototype.idAttribute,
                    collectionType: PersonCollection
                }
                // Commented out because not able to make a forward reference to Game
                // {
                //     type: Backbone.HasMany,
                //     key: 'games',
                //     relatedModel: 'Game',
                //     includeInJSON: Backbone.Model.prototype.idAttribute,
                //     collectionType: 'GameCollection'
                // }
            ]
        });

        var TeamCollection = Backbone.Collection.extend({
            model: Team,
            url: 'data/teams.json'
        });

        // ********************************************************************
        // Define Game
        // ********************************************************************
        var Game = Backbone.RelationalModel.extend({
            relations: [
                {
                    type: Backbone.HasMany,
                    key: 'teams',
                    relatedModel: Team,
                    includeInJSON: true,
                    collectionType: TeamCollection
                }
            ]
        });

        var GameCollection = Backbone.Collection.extend({
            model: Game,
            url: 'data/games.json'
        });

        // ********************************************************************
        // Fetch people, teams and games
        // ********************************************************************
        var people = new PersonCollection();
        var teams = new TeamCollection();
        var games = new GameCollection();

        people.fetch();
        teams.fetch();
        games.fetch();

        // ********************************************************************
        // Define the repository
        // ********************************************************************
        var _repository = {
            getPeople: function() {
                return people;
            },

            getTeams: function() {
                return teams;
            },

            getGames: function() {
                return games;
            }
        };

        return _repository;
    }
);