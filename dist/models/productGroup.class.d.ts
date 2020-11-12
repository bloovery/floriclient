export default class ProductGroup {
    id: number;
    description: string;
    entryDate: Date;
    changeDateTime: Date;
    expiryDate: Date;
    private apiClient;
    constructor(id: number, description: string, entryDate: Date, changeDateTime: Date, expiryDate: Date);
    getTranslation(languageCode: string): Promise<string>;
}
