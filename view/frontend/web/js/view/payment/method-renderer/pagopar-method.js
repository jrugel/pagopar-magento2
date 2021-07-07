define(
    [
        'Magento_Checkout/js/view/payment/default'
    ],
    function (Component) {
        'use strict';
        console.log('view/frontend/web/js/view/payment/method-renderer/pagopar-method.js');
        return Component.extend({
            defaults: {
                template: 'Pagopar_Magento2/payment/pagopar'
            },
            getMailingAddress: function () {
                return window.checkoutConfig.payment.checkmo.mailingAddress;
            },
            getInstructions: function () {
                return window.checkoutConfig.payment.instructions[this.item.method];
            },
        });
    }
);
