import ApiClient from './api.class';
import Product from './models/product.class';
import ProductGroup from './models/productGroup.class';
import Name from './models/name.class';

export class FloriClient {
  private readonly apiClient: ApiClient;

  constructor(clientId: string, clientSecret: string) {
    ApiClient.clientId = clientId;
    ApiClient.clientSecret = clientSecret;
    this.apiClient = ApiClient.getInstance();
  }

  async getProducts(skip?: number): Promise<Product[] | null> {
    const { value: productResponse } = await this.apiClient.call(
      '/VBN/Product',
      {
        skip,
      },
    );
    if (productResponse.length > 0) {
      return productResponse.map((product: any) => {
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
      });
    }
    return null;
  }

  async getProductsTranslated(languageCode: string): Promise<Name[] | null> {
    const { value: nameResponse } = await this.apiClient.call('/VBN/Name', {
      filter: `name_type_id eq 1 and involved_code_list_id eq 1 and language_id eq '${languageCode}'`,
    });
    if (nameResponse.length > 0) {
      return nameResponse.map((item: any) => {
        return new Name(
          item.entry_date,
          item.involved_code_list_id,
          Number(item.code_list_item_id),
          Number(item.name_type_id),
          item.language_id,
          item.name_or_translation,
          item.change_date_time,
          item.expiry_date,
          item.second_code_list_item_id,
        );
      });
    }
    return null;
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

  async getProductGroupsTranslated(
    languageCode: string,
  ): Promise<Name[] | null> {
    const { value: nameResponse } = await this.apiClient.call('/VBN/Name', {
      filter: `involved_code_list_id eq 16 and language_id eq '${languageCode}'`,
    });
    if (nameResponse.length > 0) {
      return nameResponse.map((item: any) => {
        return new Name(
          item.entry_date,
          item.involved_code_list_id,
          Number(item.code_list_item_id),
          Number(item.name_type_id),
          item.language_id,
          item.name_or_translation,
          item.change_date_time,
          item.expiry_date,
          item.second_code_list_item_id,
        );
      });
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
}
