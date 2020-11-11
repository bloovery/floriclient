import ApiClient from './api.class'

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

  /**
   * Retrieve all products
   */
  getProducts () {
    return this.apiClient.call('/VBN/Product')
  }
}