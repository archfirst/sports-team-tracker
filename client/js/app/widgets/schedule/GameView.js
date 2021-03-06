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
 * app/widgets/schedule/GameView
 *
 * @author Naresh Bhatia
 */
define(
    [
        'keel/BaseView',
        'text!app/widgets/schedule/GameTemplate.html'
    ],
    function(BaseView, GameTemplate) {
        'use strict';

        return BaseView.extend({

            tagName: 'tr',

            template: {
                name: 'GameTemplate',
                source: GameTemplate
            },

            events: {
                'mouseover': 'handleMouseOver',
                'mouseout': 'handleMouseOut'
            },

            initialize: function(/* options */) {
                this.listenTo(this.model, 'change', this.render);
            },

            handleMouseOver: function() {
                this.$el.addClass('selected');
            },

            handleMouseOut: function() {
                this.$el.removeClass('selected');
            },

            render: function() {
                this.destroyChildren();

                var template = this.getTemplate();

                // do not convert model to JSON becuase that will lose associations
                this.$el.html( template(this.model) );

                return this;
            }
        });
    }
);