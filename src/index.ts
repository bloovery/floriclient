import ApiClient from './api.class';
import Product from './models/product.class';
import ProductGroup from './models/productGroup.class';

export = class FloriClient {
  clientId: string;
  clientSecret: string;
  apiUrl: string;
  apiVersion: string;
  apiClient: ApiClient;

  constructor(clientId: string, clientSecret: string) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;

    ApiClient.clientId = clientId;
    ApiClient.clientSecret = clientSecret;
    this.apiClient = ApiClient.getInstance();
  }

  async getProductById(id: number): Promise<Product> {
    const { value: productResponse } = await this.apiClient.call(
      '/VBN/Product',
      {
        filter: `id eq ${id}`,
      },
    );
    if (productResponse.length === 1) {
      const product = productResponse[0];
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
        product.expiry_date,
      );
    }
    return null;
  }

  async getProductGroupById(id: number): Promise<ProductGroup | null> {
    const { value: groupResponse } = await this.apiClient.call(
      '/VBN/ProductGroup',
      {
        filter: `id eq ${id}`,
      },
    );
    if (groupResponse.length === 1) {
      const group = groupResponse[0];
      return new ProductGroup(
        group.id,
        group.description,
        group.entry_date,
        group.change_date_time,
        group.expiry_date,
      );
    }
    return null;
  }
};
