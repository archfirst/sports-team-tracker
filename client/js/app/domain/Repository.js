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

        // Define Person
        var Person = Backbone.RelationalModel.extend({
        });

        var PersonCollection = Backbone.Collection.extend({
            model: Person
        });

        // Define Team
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
                },
                {
                    type: Backbone.HasMany,
                    key: 'games',
                    relatedModel: 'Game',
                    includeInJSON: Backbone.Model.prototype.idAttribute,
                    collectionType: 'GameCollection'
                }
            ]
        });

        var TeamCollection = Backbone.Collection.extend({
            model: Team
        });

        // Define Game
        var Game = Backbone.RelationalModel.extend({
            relations: [
                {
                    type: Backbone.HasMany,
                    key: 'teams',
                    relatedModel: Team,
                    includeInJSON: Backbone.Model.prototype.idAttribute,
                    collectionType: TeamCollection
                }
            ]
        });

        var GameCollection = Backbone.Collection.extend({
            model: Game
        });


        // ********************************************************************
        // Create the Patriots team
        // ********************************************************************

        // Define people
        var bill = new Person({
            firstName: 'Bill',
            lastName: 'Belichick'
        });

        var tom = new Person({
            firstName: 'Tom',
            lastName: 'Brady'
        });

        var tim = new Person({
            firstName: 'Tim',
            lastName: 'Tebow'
        });

        // Define the team
        var patriots = new Team({
            name: 'Patriots',
            coach: bill,
            players: [tom, tim]
        });

        // ********************************************************************
        // Create the Jets team
        // ********************************************************************

        // Define people
        var rex = new Person({
            firstName: 'Rex',
            lastName: 'Ryan'
        });

        var greg = new Person({
            firstName: 'Greg',
            lastName: 'McElroy'
        });

        var mark = new Person({
            firstName: 'Mark',
            lastName: 'Sanchez'
        });

        // Define the team
        var nyjets = new Team({
            name: 'New York Jets',
            coach: rex,
            players: [greg, mark]
        });

        // ********************************************************************
        // Create a game
        // ********************************************************************
        var game1 = new Game({
            date: new Date(),
            teams: [patriots, nyjets]
        });

        var people = new PersonCollection([bill, tom, tim, rex, greg, mark]);
        var teams = new TeamCollection([patriots, nyjets]);
        var games = new GameCollection([game1]);

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