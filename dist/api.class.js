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
const axios_1 = __importDefault(require("axios"));
const lodash_1 = require("lodash");
const moment_1 = __importDefault(require("moment"));
class ApiClient {
    constructor(clientId, clientSecret) {
        this.loginExpiresAt = moment_1.default().subtract(1, 'hour');
        this.apiUrl = 'https://api.floricode.com';
        this.apiVersion = 'v2';
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.client = axios_1.default.create({
            baseURL: this.apiUrl
        });
    }
    get isLoggedIn() {
        return moment_1.default().isBefore(this.loginExpiresAt);
    }
    call(path, options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.isLoggedIn) {
                    yield this.loginAction();
                }
                const { data } = yield this.client.get(`${this.apiVersion}${path}`, {
                    headers: {
                        Authorization: `Bearer ${this.authBearer}`
                    }
                });
                return data;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    loginAction() {
        return __awaiter(this, void 0, void 0, function* () {
            const loginData = {
                grant_type: 'client_credentials',
                client_id: this.clientId,
                client_secret: this.clientSecret,
                scope: 'company%3Aread+companylevel%3Aread+companyrole%3Aread+location%3Aread+locationtype%3Aread+certificateorganisation%3Aread+certificatetype%3Aread+issuedcertificate%3Aread+certificatetypetofeaturevalue%3Aread'
            };
            const loginEncodedData = Object.keys(loginData).map(key => key + '=' + lodash_1.get(loginData, key)).join('&');
            try {
                const { data: { access_token, expires_in } } = yield this.client.post('/oauth/token', loginEncodedData, {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });
                this.loginExpiresAt = moment_1.default().add(expires_in, 'seconds');
                this.authBearer = access_token;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = ApiClient;
