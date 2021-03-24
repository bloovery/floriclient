import ApiClient from '../api.class';
import ProductGroup from './productGroup.class';
export default class Product {
    id: number;
    applicationId: number;
    name: string;
    shortName: string;
    plantRegistratorId: number;
    plantTaxonomicNumber: number;
    compositeIndicator: number;
    productGroupId: number;
    entryDate: Date;
    changeDateTitme: Date;
    expiryDate: Date;
    apiClient: ApiClient;
    constructor(id: number, name: string, shortName: string, plantRegistratorId: number, plantTaxonomicNumber: number, compositeIndicator: number, productGroupId: number, entryDate: Date, changeDateTitme: Date, expiryDate: Date);
    getTranslation(languageCode: string): Promise<string>;
    getGroup(): Promise<ProductGroup>;
}
//# sourceMappingURL=product.class.d.ts.map