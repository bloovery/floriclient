import { AxiosInstance } from 'axios';
import { Moment } from 'moment';
export default class ApiClient {
    private apiUrl;
    private apiVersion;
    clientId: string;
    clientSecret: string;
    client: AxiosInstance;
    loginExpiresAt: Moment;
    authBearer: string;
    constructor(clientId: string, clientSecret: string);
    get isLoggedIn(): boolean;
    call(path: string, options?: object): Promise<any>;
    private loginAction;
}
