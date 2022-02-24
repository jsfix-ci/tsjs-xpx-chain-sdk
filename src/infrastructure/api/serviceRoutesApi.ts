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
import { InlineResponse2001 } from '../model/inlineResponse2001';
import { RolesTypeEnum } from '../model/rolesTypeEnum';
import { RequestOptions } from '../RequestOptions';

import { ObjectSerializer } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'http://localhost:3000';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ServiceRoutesApiApiKeys {
}

export class ServiceRoutesApi {
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
     * Get drive by accountId.
     * @summary Get drive by accountId
     * @param accountId ID of a drive.
     */
    public async getAccountDrives (accountId: string, reqOptions?:RequestOptions) : Promise<{ response: AxiosResponse; body: InlineResponse2001;  }> {
        const localVarPath = '/drive/{accountId}'
            .replace('{' + 'accountId' + '}', encodeURIComponent(String(accountId)));
        let localVarQueryParameters: any = {};

        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling getAccountDrives.');
        }

        let requestHeaders = this.combineHeaders(reqOptions);

        let localVarRequestOptions: AxiosRequestConfig = {
            method: 'GET',
            headers: requestHeaders,
            url: localVarPath,
            baseURL: this.basePath,
            responseType: 'json'
        };

        return new Promise<{ response: AxiosResponse; body: InlineResponse2001;  }>((resolve, reject) => {
            axios(localVarRequestOptions).then(
                (response)=>{
                    let body = ObjectSerializer.deserialize(response.data, "InlineResponse2001");
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
     * Get drive by id.
     * @summary Get drive by id
     * @param accountId ID of a drive.
     */
    public async getDrive (accountId: string, reqOptions?:RequestOptions) : Promise<{ response: AxiosResponse; body: Array<object>;  }> {
        const localVarPath = '/account/{accountId}/drive'
            .replace('{' + 'accountId' + '}', encodeURIComponent(String(accountId)));
        let localVarQueryParameters: any = {};

        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling getDrive.');
        }

        let requestHeaders = this.combineHeaders(reqOptions);

        let localVarRequestOptions: AxiosRequestConfig = {
            method: 'GET',
            headers: requestHeaders,
            url: localVarPath,
            baseURL: this.basePath,
            responseType: 'json'
        };

        return new Promise<{ response: AxiosResponse; body: Array<object>;  }>((resolve, reject) => {
            axios(localVarRequestOptions).then(
                (response)=>{
                    let body = ObjectSerializer.deserialize(response.data, "Array<object>");
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
     * Get drive by id and role.
     * @summary Get drive by id and role
     * @param accountId ID of a drive.
     * @param role Role in drive (owner or replicator).
     */
    public async getDriveByRole (accountId: string, role: RolesTypeEnum, reqOptions?:RequestOptions) : Promise<{ response: AxiosResponse; body: Array<object>;  }> {
        const localVarPath = '/account/{accountId}/drive/{role}'
            .replace('{' + 'accountId' + '}', encodeURIComponent(String(accountId)))
            .replace('{' + 'role' + '}', encodeURIComponent(String(role)));
        let localVarQueryParameters: any = {};

        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling getDriveByRole.');
        }

        // verify required parameter 'role' is not null or undefined
        if (role === null || role === undefined) {
            throw new Error('Required parameter role was null or undefined when calling getDriveByRole.');
        }

        let requestHeaders = this.combineHeaders(reqOptions);

        let localVarRequestOptions: AxiosRequestConfig = {
            method: 'GET',
            headers: requestHeaders,
            url: localVarPath,
            baseURL: this.basePath,
            responseType: 'json'
        };

        return new Promise<{ response: AxiosResponse; body: Array<object>;  }>((resolve, reject) => {
            axios(localVarRequestOptions).then(
                (response)=>{
                    let body = ObjectSerializer.deserialize(response.data, "Array<object>");
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
