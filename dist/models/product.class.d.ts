import ApiClient from '../api.class';
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
    getTranslation(languageCode: string): Promise<any>;
}
