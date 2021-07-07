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
        console.log('view/frontend/web/js/view/payment/pagopar.js');
        rendererList.push(
            {
                type: 'pagopar',
                component: 'Pagopar_Magento2/js/view/payment/method-renderer/pagopar-method'
            }
        );
        return Component.extend({});
    }
);