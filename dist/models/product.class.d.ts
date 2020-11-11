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
    constructor(id: number, name: string, shortName: string, plantRegistratorId: number, plantTaxonomicNumber: number, compositeIndicator: number, productGroupId: number, entryDate: Date, changeDateTitme: Date, expiryDate: Date);
}
