import Product from './models/product.class';
import ProductGroup from './models/productGroup.class';
export declare class FloriClient {
    private apiClient;
    constructor(clientId: string, clientSecret: string);
    getProducts(skip?: number): Promise<Product[] | null>;
    getProductById(id: number): Promise<Product>;
    getProductGroupById(id: number): Promise<ProductGroup | null>;
}
//# sourceMappingURL=index.d.ts.map