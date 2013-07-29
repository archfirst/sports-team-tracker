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
        'app/domain/GameCollection',
        'app/domain/PersonCollection',
        'app/domain/TeamCollection'
    ],
    function(GameCollection, PersonCollection, TeamCollection) {
        'use strict';

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