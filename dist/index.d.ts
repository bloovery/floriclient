import ApiClient from './api.class';
import Product from './models/product.class';
import ProductGroup from './models/productGroup.class';
declare const _default: {
    new (clientId: string, clientSecret: string): {
        clientId: string;
        clientSecret: string;
        apiUrl: string;
        apiVersion: string;
        apiClient: ApiClient;
        getProductById(id: number): Promise<Product>;
        getProductGroupById(id: number): Promise<ProductGroup | null>;
    };
};
export = _default;
