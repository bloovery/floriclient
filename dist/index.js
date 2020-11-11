"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const api_class_1 = __importDefault(require("./api.class"));
module.exports = class FloriClient {
    constructor(clientId, clientSecret) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.apiClient = new api_class_1.default(this.clientId, this.clientSecret);
    }
    /**
     * Retrieve all products
     */
    getProducts() {
        return this.apiClient.call('/VBN/Product');
    }
};
