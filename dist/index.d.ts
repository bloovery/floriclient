import ApiClient from './api.class';
declare const _default: {
    new (clientId: string, clientSecret: string): {
        clientId: string;
        clientSecret: string;
        apiUrl: string;
        apiVersion: string;
        apiClient: ApiClient;
        /**
         * Retrieve all products
         */
        getProducts(): Promise<any>;
    };
};
export = _default;
