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
exports.FloriClient = void 0;
const api_class_1 = __importDefault(require("./api.class"));
const product_class_1 = __importDefault(require("./models/product.class"));
const productGroup_class_1 = __importDefault(require("./models/productGroup.class"));
class FloriClient {
    constructor(clientId, clientSecret) {
        api_class_1.default.clientId = clientId;
        api_class_1.default.clientSecret = clientSecret;
        this.apiClient = api_class_1.default.getInstance();
    }
    getProducts(skip) {
        return __awaiter(this, void 0, void 0, function* () {
            const { value: productResponse } = yield this.apiClient.call('/VBN/Product', {
                skip,
            });
            if (productResponse.length > 0) {
                return productResponse.map((product) => {
                    return new product_class_1.default(product.id, product.name, product.short_name, product.plant_registrator_id, product.plant_taxonomic_number, product.composite_indicator, product.product_group_id, product.entry_date, product.change_date_time, product.expiry_date);
                });
            }
            return null;
        });
    }
    getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { value: productResponse } = yield this.apiClient.call('/VBN/Product', {
                filter: `id eq ${id}`,
            });
            if (productResponse.length === 1) {
                const product = productResponse[0];
                return new product_class_1.default(product.id, product.name, product.short_name, product.plant_registrator_id, product.plant_taxonomic_number, product.composite_indicator, product.product_group_id, product.entry_date, product.change_date_time, product.expiry_date);
            }
            return null;
        });
    }
    getProductGroupById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { value: groupResponse } = yield this.apiClient.call('/VBN/ProductGroup', {
                filter: `id eq ${id}`,
            });
            if (groupResponse.length === 1) {
                const group = groupResponse[0];
                return new productGroup_class_1.default(group.id, group.description, group.entry_date, group.change_date_time, group.expiry_date);
            }
            return null;
        });
    }
}
exports.FloriClient = FloriClient;
;
