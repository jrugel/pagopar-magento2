define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'pagopar_cobros',
                component: 'Pagopar_Magento2/js/view/payment/method-renderer/pagopar_cobros-method'
            }
        );
        return Component.extend({});
    }
);