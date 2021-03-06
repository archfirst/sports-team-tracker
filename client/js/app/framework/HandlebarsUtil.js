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
 * app/framework/HandlebarsUtil
 *
 * Utility functions for Handlebars
 *
 * @author Naresh Bhatia
 */
define(
    [
        'handlebars',
        'moment'
    ],
    function(Handlebars, moment) {
        'use strict';

        // Add Backbone model and collection support
        Handlebars.JavaScriptCompiler.prototype.nameLookup = function(parent, name /*, type */) {
            if (/^[0-9]+$/.test(name)) {
                return '(typeof ' + parent + '.at == "function" ? ' + parent + '.at(' + name + ') : ' + parent + '[' + name + '])';
            }
            else if (Handlebars.JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
                return '(typeof ' + parent + '.get == "function" ? ' + parent + '.get("' + name + '") : ' + parent + '.' + name + ')';
            }
            else {
                return parent + '["' + name + '"]';
            }
        };

        // formatDateTime helper
        Handlebars.registerHelper('formatDateTime', function(date) {
            return moment(date).format('ddd, MMM Do YYYY hh:mm a');
        });
    }
);