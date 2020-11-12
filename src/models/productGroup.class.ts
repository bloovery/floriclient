import ApiClient from '../api.class'

export default class ProductGroup {
  id: number;
  description: string;
  entryDate: Date;
  changeDateTime: Date;
  expiryDate: Date;

  private apiClient: ApiClient

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

    this.apiClient = ApiClient.getInstance()
  }

  async getTranslation (languageCode: string) {
    const { value: nameResponse } = await this.apiClient.call('/VBN/Name', {
      filter: `involved_code_list_id eq 16 and language_id eq '${languageCode}' and code_list_item_id eq '${this.id}'`
    })
    if (nameResponse.length === 1) {
      return nameResponse[0].name_or_translation
    }
    return null
  }
}