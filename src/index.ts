import ApiClient from './api.class'
import Product from './models/product.class'

export = class FloriClient {
  clientId: string;
  clientSecret: string;
  apiUrl: string;
  apiVersion: string;
  apiClient: ApiClient;

  constructor(clientId: string, clientSecret: string) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;

    this.apiClient = new ApiClient(this.clientId, this.clientSecret);
  }

  async getProductById (id: number): Promise<Product> {
    const { value: productResponse } = await this.apiClient.call('/VBN/Product', {
      filter: `id eq ${id}`
    })
    if (productResponse.length === 1) {
      const product = productResponse[0]
      return new Product(
        product.id,
        product.name,
        product.short_name,
        product.plant_registrator_id,
        product.plant_taxonomic_number,
        product.composite_indicator,
        product.product_group_id,
        product.entry_date,
        product.change_date_time,
        product.expiry_date
      )
    }
    return null
  }
}