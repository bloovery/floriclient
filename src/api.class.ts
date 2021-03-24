import axios, { AxiosInstance } from 'axios';
import { get } from 'lodash';
import moment, { Moment } from 'moment';

import { RequestParameters } from './interfaces';

export default class ApiClient {
  private static instance: ApiClient;
  public static clientId: string;
  public static clientSecret: string;

  private _clientId: string;
  private _clientSecret: string;

  private apiUrl: string;
  private apiVersion: string;
  private client: AxiosInstance;

  private loginExpiresAt: Moment = moment().subtract(1, 'hour');

  private authBearer: string;

  private constructor(clientId: string, clientSecret: string) {
    this.apiUrl = 'https://api.floricode.com';
    this.apiVersion = 'v2';

    this._clientId = clientId;
    this._clientSecret = clientSecret;

    this.client = axios.create({
      baseURL: this.apiUrl,
    });
  }

  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient(this.clientId, this.clientSecret);
    }
    return ApiClient.instance;
  }

  get isLoggedIn(): boolean {
    return moment().isBefore(this.loginExpiresAt);
  }

  public async call(
    path: string,
    parameters?: RequestParameters,
  ): Promise<unknown> {
    let params = {};
    if (parameters) {
      const { filter, select, top, skip, count } = parameters;
      params = {
        $filter: filter,
        $select: select,
        $top: top,
        $skip: skip,
        $count: count,
      };
    }
    try {
      if (!this.isLoggedIn) {
        await this.loginAction();
      }
      const { data } = await this.client.get(`${this.apiVersion}${path}`, {
        params,
        headers: {
          Authorization: `Bearer ${this.authBearer}`,
        },
      });
      return data;
    } catch (error) {
      console.log(error.response.statusText);
    }
  }

  private async loginAction(): Promise<void> {
    const loginData = {
      grant_type: 'client_credentials',
      client_id: this._clientId,
      client_secret: this._clientSecret,
      scope:
        'company%3Aread+companylevel%3Aread+companyrole%3Aread+location%3Aread+locationtype%3Aread+certificateorganisation%3Aread+certificatetype%3Aread+issuedcertificate%3Aread+certificatetypetofeaturevalue%3Aread',
    };
    const loginEncodedData = Object.keys(loginData)
      .map((key) => key + '=' + get(loginData, key))
      .join('&');
    try {
      const {
        data: { access_token, expires_in },
      } = await this.client.post('/oauth/token', loginEncodedData, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
      this.loginExpiresAt = moment().add(expires_in, 'seconds');
      this.authBearer = access_token;
    } catch (error) {
      console.log(error.response.statusText);
    }
  }
}
