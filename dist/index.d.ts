import Product from './models/product.class';
import ProductGroup from './models/productGroup.class';
import Name from './models/name.class';
export declare class FloriClient {
    private readonly apiClient;
    constructor(clientId: string, clientSecret: string);
    getProducts(skip?: number): Promise<Product[] | null>;
    getProductsTranslated(languageCode: string): Promise<Name[] | null>;
    getProductById(id: number): Promise<Product>;
    getProductGroupsTranslated(languageCode: string): Promise<Name[] | null>;
    getProductGroupById(id: number): Promise<ProductGroup | null>;
}
//# sourceMappingURL=index.d.ts.map