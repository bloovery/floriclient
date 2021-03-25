# Floriclient

Floriclient is a JavaScript client for the FloriCode API.

Usage
=====

Install the package using yarn or npm
```bash
yarn add @bloovery/floriclient
```
Instantiate the class with the provided client id (username) and client secret (password).
```javascript
const Floriclient = require('floriclient')
const client = new Floriclient('USERNAME', 'PASSWORD')

// Retrieve a product by ID
const product = await client.getProductById(20453)
// Product {
//   id: 20453,
//   name: "Aglaonema 'Cleopatra'",
//   shortName: 'AGLAO CLEOPATRA',
//   plantRegistratorId: 1,
//   plantTaxonomicNumber: 150125,
//   compositeIndicator: 0,
//   productGroupId: 20606401,
//   entryDate: '2002-09-25',
//   changeDateTitme: '2010-10-26T08:57:00+02:00',
//   expiryDate: null
// }
```

[Changelog](CHANGELOG.md)
=============
### [0.7.1] - 2021-03-25
- Added `top` to limit `getProducts` results
- Exposed `apiClient` to call directly the API's
### [0.7.0] - 2021-03-25
- Added `Name` class
- Added `getProductsTranslated` and `getProductGroupsTranslated` methods
### [0.6.1] - 2021-03-24
- Added `getProducts` method
- Removed some unused properties