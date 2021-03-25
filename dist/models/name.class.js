"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Name {
    constructor(entryDate, involvedCodeListId, codeListItemId, nameTypeId, languageId, nameOrTranslation, changeDateTime, expiryDate, secondCodeListItemId) {
        this.expiryDate = expiryDate;
        this.entryDate = entryDate;
        this.involvedCodeListId = involvedCodeListId;
        this.codeListItemId = codeListItemId;
        this.secondCodeListItemId = secondCodeListItemId;
        this.nameTypeId = nameTypeId;
        this.languageId = languageId;
        this.nameOrTranslation = nameOrTranslation;
        this.changeDateTime = changeDateTime;
    }
}
exports.default = Name;
