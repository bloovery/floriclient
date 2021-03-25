import ApiClient from './api.class';
import Product from './models/product.class';
import ProductGroup from './models/productGroup.class';
import Name from './models/name.class';
export declare class FloriClient {
    readonly apiClient: ApiClient;
    constructor(clientId: string, clientSecret: string);
    getProducts(top?: number, skip?: number): Promise<Product[] | null>;
    getProductsTranslated(languageCode: string): Promise<Name[] | null>;
    getProductById(id: number): Promise<Product>;
    getProductGroupsTranslated(languageCode: string): Promise<Name[] | null>;
    getProductGroupById(id: number): Promise<ProductGroup | null>;
}
//# sourceMappingURL=index.d.ts.map