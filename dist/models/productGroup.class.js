"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductGroup {
    constructor(id, description, entryDate, changeDateTime, expiryDate) {
        this.id = id;
        this.description = description;
        this.entryDate = entryDate;
        this.changeDateTime = changeDateTime;
        this.expiryDate = expiryDate;
    }
}
exports.default = ProductGroup;
