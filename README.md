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

Latest update
=============

## Unreleased
- Added `ProductGroup` class

## [0.2.0] - 11/11/2020
- Added product class
- Added product fetch by ID
- Added `RequestParameters` interface