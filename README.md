# Mage2 Module Pagopar Magento2

    ``pagopar/module-magento2``

 - [Main Functionalities](#markdown-header-main-functionalities)
 - [Installation](#markdown-header-installation)
 - [Configuration](#markdown-header-configuration)
 - [Specifications](#markdown-header-specifications)
 - [Attributes](#markdown-header-attributes)


## Main Functionalities
Implementación de Pagopar para Magento 2

## Installation
\* = in production please use the `--keep-generated` option

### Type 1: Zip file

 - Unzip the zip file in `app/code/Pagopar`
 - Enable the module by running `php bin/magento module:enable Pagopar_Magento2`
 - Apply database updates by running `php bin/magento setup:upgrade`\*
 - Flush the cache by running `php bin/magento cache:flush`

### Type 2: Composer

 - Make the module available in a composer repository for example:
    - private repository `repo.magento.com`
    - public repository `packagist.org`
    - public github repository as vcs
 - Add the composer repository to the configuration by running `composer config repositories.repo.magento.com composer https://repo.magento.com/`
 - Install the module composer by running `composer require pagopar/module-magento2`
 - enable the module by running `php bin/magento module:enable Pagopar_Magento2`
 - apply database updates by running `php bin/magento setup:upgrade`\*
 - Flush the cache by running `php bin/magento cache:flush`


## Configuration

 - Pagopar_cobros - payment/pagopar_cobros/*

 - Pagopar_envios - carriers/pagopar_envios/*


## Specifications

 - Payment Method
	- Pagopar_cobros

 - Shipping Method
	- pagopar_envios


## Attributes



