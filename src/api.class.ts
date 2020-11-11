import axios, { AxiosInstance,  } from 'axios';
import { get } from 'lodash'
import moment, { Moment } from 'moment'

export default class ApiClient {
  private apiUrl: string;
  private apiVersion: string;

  clientId: string;
  clientSecret: string;
  client: AxiosInstance;

  loginExpiresAt: Moment = moment().subtract(1, 'hour');

  authBearer: string;

  constructor(clientId: string, clientSecret: string) {
    this.apiUrl = 'https://api.floricode.com';
    this.apiVersion = 'v2';

    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.client = axios.create({
      baseURL: this.apiUrl
    })
  }

  get isLoggedIn () {
    return moment().isBefore(this.loginExpiresAt)
  }

  async call (path: string, options?: object) {
    try {
      if (!this.isLoggedIn) {
        await this.loginAction()
      }
      const { data } = await this.client.get(`${this.apiVersion}${path}`, {
        headers: {
          Authorization: `Bearer ${this.authBearer}`
        }
      })
      return data
    } catch (error) {
      console.log(error)
    }
  }

  private async loginAction () {
    const loginData = {
      grant_type: 'client_credentials',
      client_id: this.clientId,
      client_secret: this.clientSecret,
      scope: 'company%3Aread+companylevel%3Aread+companyrole%3Aread+location%3Aread+locationtype%3Aread+certificateorganisation%3Aread+certificatetype%3Aread+issuedcertificate%3Aread+certificatetypetofeaturevalue%3Aread'
    }
    const loginEncodedData = Object.keys(loginData).map(key => key + '=' + get(loginData, key)).join('&')
    try {
      const { data: { access_token, expires_in } } = await this.client.post('/oauth/token', loginEncodedData, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      this.loginExpiresAt = moment().add(expires_in, 'seconds')
      this.authBearer = access_token
    } catch (error) {
      console.log(error)
    }
  }
}