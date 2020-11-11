export default class ProductGroup {
  id: number;
  description: string;
  entryDate: Date;
  changeDateTime: Date;
  expiryDate: Date;

  constructor (
    id: number,
    description: string,
    entryDate: Date,
    changeDateTime: Date,
    expiryDate: Date
  ) {
    this.id = id;
    this.description = description;
    this.entryDate = entryDate;
    this.changeDateTime = changeDateTime;
    this.expiryDate = expiryDate;
  }
}