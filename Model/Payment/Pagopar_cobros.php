<?php
/**
 * Copyright © 2021 All rights reserved.
 * See COPYING.txt for license details.
 */
declare(strict_types=1);

namespace Pagopar\Magento2\Model\Payment;

class Pagopar_cobros extends \Magento\Payment\Model\Method\AbstractMethod
{

    protected $_code = "pagopar_cobros";
    protected $_isOffline = true;

    public function isAvailable(
        \Magento\Quote\Api\Data\CartInterface $quote = null
    ) {
        return parent::isAvailable($quote);
    }
}

