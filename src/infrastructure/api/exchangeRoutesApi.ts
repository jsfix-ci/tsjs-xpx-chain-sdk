/**
 * Catapult REST API Reference
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.15
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import http = require('http');
import axios from 'axios';
import {AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';

/* tslint:disable:no-unused-locals */
import { ExchangesDTO } from '../model/exchangesDTO';
import { ExchangeInlineResponse200 } from '../model/exchangeInlineResponse200';

import { RequestOptions } from '../RequestOptions';
import { ObjectSerializer } from '../model/models';

import { HttpError, RequestFile } from './apis';
import { ExchangeMosaicDTO } from '../model/exchangeMosaicDTO';

let defaultBasePath = 'http://localhost:3000';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ExchangeRoutesApiApiKeys {
}

export class ExchangeRoutesApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : { [name: string]: string; } = { 
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
    };
    protected _useQuerystring : boolean = false;

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    combineHeaders(reqOptions?:RequestOptions){
        return reqOptions ? {...this._defaultHeaders, ...reqOptions.headers} : this._defaultHeaders;
    }

    /**
     * Return exchange offer by account id.
     * @summary Get exchange offers by account id
     * @param accountId The public key or address of an account.
     */
    public async getAccountExchangeOffers (accountId: string, reqOptions?:RequestOptions) : Promise<{ response: AxiosResponse; body: ExchangeInlineResponse200;  }> {
        const localVarPath = '/account/{accountId}/exchange'
            .replace('{' + 'accountId' + '}', encodeURIComponent(String(accountId)));

        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling getAccountExchangeOffers.');
        }

        let requestHeaders = this.combineHeaders(reqOptions);

        let localVarRequestOptions: AxiosRequestConfig = {
            method: 'GET',
            headers: requestHeaders,
            url: localVarPath,
            baseURL: this.basePath,
            responseType: 'json'
        };

        return new Promise<{ response: AxiosResponse; body: ExchangeInlineResponse200;  }>((resolve, reject) => {
            axios(localVarRequestOptions).then(
                (response)=>{
                    let body = ObjectSerializer.deserialize(response.data, "ExchangeInlineResponse200");
                    if (response.status && response.status >= 200 && response.status <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                            reject(response);
                    }
                },
                (error: AxiosError ) => {
                    reject(error);
                }
            );
        });
    }
    /**
     * Get exchange offer by type and mosaic id.
     * @summary Get exchange offer by type and mosaic id
     * @param offerType The type of exchange offer.
     * @param mosaicId The mosaic identifier.
     */
    public async getExchangeOffers (offerType: string, mosaicId: string, reqOptions?:RequestOptions) : Promise<{ response: AxiosResponse; body: Array<ExchangesDTO>;  }> {
        const localVarPath = '/exchange/{offerType}/{mosaicId}'
            .replace('{' + 'offerType' + '}', encodeURIComponent(String(offerType)))
            .replace('{' + 'mosaicId' + '}', encodeURIComponent(String(mosaicId)));

        // verify required parameter 'offerType' is not null or undefined
        if (offerType === null || offerType === undefined) {
            throw new Error('Required parameter offerType was null or undefined when calling getExchangeOffers.');
        }

        // verify required parameter 'mosaicId' is not null or undefined
        if (mosaicId === null || mosaicId === undefined) {
            throw new Error('Required parameter mosaicId was null or undefined when calling getExchangeOffers.');
        }

        let requestHeaders = this.combineHeaders(reqOptions);

        let localVarRequestOptions: AxiosRequestConfig = {
            method: 'GET',
            headers: requestHeaders,
            url: localVarPath,
            baseURL: this.basePath,
            responseType: 'json'
        };

        return new Promise<{ response: AxiosResponse; body: Array<ExchangesDTO>;  }>((resolve, reject) => {
            axios(localVarRequestOptions).then(
                (response)=>{
                    let body = ObjectSerializer.deserialize(response.data, "Array<ExchangesDTO>");
                    if (response.status && response.status >= 200 && response.status <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                            reject(response);
                    }
                },
                (error: AxiosError ) => {
                    reject(error);
                }
            );
        });
    }

    /**
     * Get exchange offer list.
     * @summary Get exchange offer list
     * @param offerType The type of exchange offer.
     */
     public async getOfferList (reqOptions?:RequestOptions) : Promise<{ response: AxiosResponse; body: Array<ExchangeMosaicDTO>;  }> {
        const localVarPath = '/exchange/mosaics';

        let requestHeaders = this.combineHeaders(reqOptions);

        let localVarRequestOptions: AxiosRequestConfig = {
            method: 'GET',
            headers: requestHeaders,
            url: localVarPath,
            baseURL: this.basePath,
            responseType: 'json'
        };

        return new Promise<{ response: AxiosResponse; body: Array<ExchangeMosaicDTO>;  }>((resolve, reject) => {
            axios(localVarRequestOptions).then(
                (response)=>{
                    let body = ObjectSerializer.deserialize(response.data, "Array<ExchangeMosaicDTO>");
                    if (response.status && response.status >= 200 && response.status <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                            reject(response);
                    }
                },
                (error: AxiosError ) => {
                    reject(error);
                }
            );
        });
    }
}
