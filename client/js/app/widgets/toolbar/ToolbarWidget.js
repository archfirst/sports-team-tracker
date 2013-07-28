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
 * app/widgets/toolbar/ToolbarWidget
 *
 * @author Naresh Bhatia
 */
define(
    [
        'app/domain/Repository',
        'app/framework/Message',
        'backbone',
        'keel/BaseView',
        'keel/MessageBus',
        'text!app/widgets/toolbar/ToolbarTemplate.html'
    ],
    function(Repository, Message, Backbone, BaseView, MessageBus, ToolbarTemplate) {
        'use strict';

        return BaseView.extend({
            tagName: 'form',
            className: 'toolbar-widget',

            template: {
                name: 'ToolbarTemplate',
                source: ToolbarTemplate
            },

            events: {
                'click .js-tableButton': 'switchToTable',
                'click .js-chartButton': 'switchToChart',
                'click .js-tradeButton': 'trade',
                'click .js-deleteAllButton': 'deleteAll',
                'click .js-refreshButton': 'refreshDesktop'
            },

            switchToTable: function() {
                Backbone.history.navigate('order-table', true);
                return false;
            },

            switchToChart: function() {
                Backbone.history.navigate('order-chart', true);
                return false;
            },

            trade: function() {
                MessageBus.trigger(Message.RequestMultiTradeEntry);
                return false;
            },

            deleteAll: function() {
                Repository.deleteAllOrders();
                return false;
            },

            refreshDesktop: function() {
                Repository.fetchOrders();
                return false;
            }
        });
    }
);