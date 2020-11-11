import { RequestParameters } from './interfaces';
export default class ApiClient {
    private static instance;
    static clientId: string;
    static clientSecret: string;
    private _clientId;
    private _clientSecret;
    private apiUrl;
    private apiVersion;
    private client;
    private loginExpiresAt;
    private authBearer;
    private constructor();
    static getInstance(): ApiClient;
    get isLoggedIn(): boolean;
    call(path: string, parameters?: RequestParameters): Promise<any>;
    private loginAction;
}
