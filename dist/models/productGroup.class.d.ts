export default class ProductGroup {
    id: number;
    description: string;
    entryDate: Date;
    changeDateTime: Date;
    expiryDate: Date;
    constructor(id: number, description: string, entryDate: Date, changeDateTime: Date, expiryDate: Date);
}
