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

  constructor (
    id: number,
    name: string, 
    shortName: string, 
    plantRegistratorId: number,
    plantTaxonomicNumber: number,
    compositeIndicator: number,
    productGroupId: number,
    entryDate: Date,
    changeDateTitme: Date,
    expiryDate: Date
    ) {
      this.id = id;
      this.name = name;
      this.shortName = shortName;
      this.plantRegistratorId = plantRegistratorId;
      this.plantTaxonomicNumber = plantTaxonomicNumber;
      this.compositeIndicator = compositeIndicator;
      this.productGroupId = productGroupId;
      this.entryDate = entryDate;
      this.changeDateTitme = changeDateTitme;
      this.expiryDate = expiryDate;
  }
}