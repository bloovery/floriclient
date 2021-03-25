export default class Name {
  expiryDate?: Date;
  entryDate: Date;
  involvedCodeListId: number;
  codeListItemId: number;
  secondCodeListItemId?: number;
  nameTypeId: number;
  languageId: string;
  nameOrTranslation: string;
  changeDateTime: Date;

  constructor(
    entryDate: Date,
    involvedCodeListId: number,
    codeListItemId: number,
    nameTypeId: number,
    languageId: string,
    nameOrTranslation: string,
    changeDateTime: Date,
    expiryDate?: Date,
    secondCodeListItemId?: number,
  ) {
    this.expiryDate = expiryDate;
    this.entryDate = entryDate;
    this.involvedCodeListId = involvedCodeListId;
    this.codeListItemId = codeListItemId;
    this.secondCodeListItemId = secondCodeListItemId;
    this.nameTypeId = nameTypeId;
    this.languageId = languageId;
    this.nameOrTranslation = nameOrTranslation;
    this.changeDateTime = changeDateTime;
  }
}
