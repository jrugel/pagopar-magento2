var config = {
    'config': {
        'mixins': {
            'Magento_Checkout/js/view/shipping': {
                'Vendor_Module/js/view/shipping-payment-mixin': true
            },
            'Magento_Checkout/js/view/payment': {
                'Vendor_Module/js/view/shipping-payment-mixin': true
            }
        }
    }
}

define([
    'ko'
], function (ko) {
    'use strict';

    var mixin = {

        initialize: function () {
            // set visible to be initially false to have your step show first
            this.isVisible = ko.observable(false);
            this._super();

            return this;
        }
    };

    return function (target) {
        return target.extend(mixin);
    };
});
