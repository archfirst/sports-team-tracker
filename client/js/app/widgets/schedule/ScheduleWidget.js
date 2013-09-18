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
 * app/widgets/schedule/ScheduleWidget
 *
 * @author Naresh Bhatia
 */

define(
    [
        'app/widgets/schedule/ScheduleTableBodyView',
        'keel/BaseView',
        'text!app/widgets/schedule/ScheduleTemplate.html'
    ],
    function(ScheduleTableBodyView, BaseView, ScheduleTemplate) {
        'use strict';

        return BaseView.extend({
            tagName: 'table',
            className: 'schedule-table clearfix',

            template: {
                name: 'ScheduleTemplate',
                source: ScheduleTemplate
            },

            postRender: function() {
                this.addChild({
                    id: 'ScheduleTableBodyView',
                    viewClass: ScheduleTableBodyView,
                    options: {
                        collection: this.collection,
                        el: this.$el.find('tbody')
                    }
                });
            }
        });
    }
);