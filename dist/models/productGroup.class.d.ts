export default class ProductGroup {
    id: number;
    description: string;
    entryDate: Date;
    changeDateTime: Date;
    expiryDate: Date;
    private readonly apiClient;
    constructor(id: number, description: string, entryDate: Date, changeDateTime: Date, expiryDate: Date);
    getTranslation(languageCode: string): Promise<string>;
}
//# sourceMappingURL=productGroup.class.d.ts.map