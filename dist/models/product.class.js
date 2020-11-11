"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(id, name, shortName, plantRegistratorId, plantTaxonomicNumber, compositeIndicator, productGroupId, entryDate, changeDateTitme, expiryDate) {
        this.id = id;
        this.name = name;
        this.shortName = shortName;
        this.plantRegistratorId = plantRegistratorId;
        this.plantTaxonomicNumber = plantTaxonomicNumber;
        this.compositeIndicator = compositeIndicator;
        this.productGroupId = productGroupId;
        this.entryDate = entryDate;
        this.changeDateTitme = changeDateTitme;
        this.expiryDate = expiryDate;
    }
}
exports.default = Product;
