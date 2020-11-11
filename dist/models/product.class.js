"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_class_1 = __importDefault(require("../api.class"));
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
        this.apiClient = api_class_1.default.getInstance();
    }
    getTranslation(languageCode) {
        return __awaiter(this, void 0, void 0, function* () {
            const { value: nameResponse } = yield this.apiClient.call('/VBN/Name', {
                filter: `name_type_id eq 1 and involved_code_list_id eq 1 and language_id eq '${languageCode}' and code_list_item_id eq '${this.id}'`
            });
            if (nameResponse.length === 1) {
                return nameResponse[0].name_or_translation;
            }
            return null;
        });
    }
}
exports.default = Product;
