import ApiClient from '../api.class'

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

  apiClient: ApiClient

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

      this.apiClient = ApiClient.getInstance()
  }

  async getTranslation (languageCode: string) {
    const { value: nameResponse } = await this.apiClient.call('/VBN/Name', {
      filter: `name_type_id eq 1 and involved_code_list_id eq 1 and language_id eq '${languageCode}' and code_list_item_id eq '${this.id}'`
    })
    if (nameResponse.length === 1) {
      return nameResponse[0].name_or_translation
    }
    return null
  }
}