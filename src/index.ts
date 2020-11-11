class FloriClient {
  clientId: string;
  clientSecret: string;
  apiUrl: string;
  apiVersion: string;

  constructor(clientId: string, clientSecret: string) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;

    this.apiUrl = 'https://api.floricode.com';
    this.apiVersion = 'v2';
  }
}