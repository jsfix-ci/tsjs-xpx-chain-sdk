/*
 * Copyright 2019 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
import { MosaicIds } from '../model/mosaicIds';
import { MosaicInfoDTO } from '../model/mosaicInfoDTO';
import { MosaicNamesDTO } from '../model/mosaicNamesDTO';
import { MosaicRichListDTO } from '../model/mosaicRichListDTO';
import { MosaicLevyDTO } from '../model/mosaicLevyDTO';

import { ObjectSerializer } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'http://localhost:3000';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum MosaicRoutesApiApiKeys {
}

export class MosaicRoutesApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
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

    /**
     * Gets the mosaic definition for a given mosaicId.
     * @summary Get mosaic information
     * @param mosaicId The mosaic identifier.
     */
    public async getMosaic (mosaicId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: AxiosResponse; body: MosaicInfoDTO;  }> {
        const localVarPath = '/mosaic/{mosaicId}'
            .replace('{' + 'mosaicId' + '}', encodeURIComponent(String(mosaicId)));

        // verify required parameter 'mosaicId' is not null or undefined
        if (mosaicId === null || mosaicId === undefined) {
            throw new Error('Required parameter mosaicId was null or undefined when calling getMosaic.');
        }

        let localVarRequestOptions: AxiosRequestConfig = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
            url: localVarPath,
            baseURL: this.basePath,
            responseType: 'json'
        };

        return new Promise<{ response: AxiosResponse; body: MosaicInfoDTO;  }>((resolve, reject) => {
            axios(localVarRequestOptions).then(
                (response)=>{
                    let body = ObjectSerializer.deserialize(response.data, "MosaicInfoDTO");
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
     * Retrieve owners of a given mosaic sorted on descending order based on amount. (REST only)
     * @summary Get mosaic information
     * @param mosaicId The mosaic identifier.
     * @param page The page of list (starts at 0).
     * @param pageSize The count of items on a page (max 100, default 25).
     */
    public async getMosaicRichList (mosaicId: string, page?: number, pageSize?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: AxiosResponse; body: Array<MosaicRichListDTO>;  }> {
        const localVarPath = '/mosaic/{mosaicId}/richlist'
            .replace('{' + 'mosaicId' + '}', encodeURIComponent(String(mosaicId)));
        let localVarQueryParameters: any = {};

        // verify required parameter 'mosaicId' is not null or undefined
        if (mosaicId === null || mosaicId === undefined) {
            throw new Error('Required parameter mosaicId was null or undefined when calling getMosaicRichList.');
        }

        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "number");
        }

        if (pageSize !== undefined) {
            localVarQueryParameters['pageSize'] = ObjectSerializer.serialize(pageSize, "number");
        }

        let localVarRequestOptions: AxiosRequestConfig = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
            url: localVarPath,
            baseURL: this.basePath,
            responseType: 'json'
        };

        return new Promise<{ response: AxiosResponse; body: Array<MosaicRichListDTO>;  }>((resolve, reject) => {
            axios(localVarRequestOptions).then(
                (response)=>{
                    let body = ObjectSerializer.deserialize(response.data, "Array<MosaicRichListDTO>");
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
     * Gets an array of mosaic definition.
     * @summary Get mosaics information for an array of mosaics
     * @param mosaicIds 
     */
    public async getMosaics (mosaicIds: MosaicIds, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: AxiosResponse; body: Array<MosaicInfoDTO>;  }> {
        const localVarPath = '/mosaic';

        // verify required parameter 'mosaicIds' is not null or undefined
        if (mosaicIds === null || mosaicIds === undefined) {
            throw new Error('Required parameter mosaicIds was null or undefined when calling getMosaics.');
        }

        let localVarRequestOptions: AxiosRequestConfig = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
            url: localVarPath,
            baseURL: this.basePath,
            responseType: 'json',
            data: ObjectSerializer.serialize(mosaicIds, "MosaicIds")
        };

        return new Promise<{ response: AxiosResponse; body: Array<MosaicInfoDTO>;  }>((resolve, reject) => {
            axios(localVarRequestOptions).then(
                (response)=>{
                    let body = ObjectSerializer.deserialize(response.data, "Array<MosaicInfoDTO>");
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
     * Returns friendly names for mosaics.
     * @summary Get readable names for a set of mosaics
     * @param mosaicIds 
     */
    public async getMosaicsNames (mosaicIds: MosaicIds, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: AxiosResponse; body: Array<MosaicNamesDTO>;  }> {
        const localVarPath = '/mosaic/names';
        let localVarQueryParameters: any = {};

        // verify required parameter 'mosaicIds' is not null or undefined
        if (mosaicIds === null || mosaicIds === undefined) {
            throw new Error('Required parameter mosaicIds was null or undefined when calling getMosaicsNames.');
        }

        let localVarRequestOptions: AxiosRequestConfig = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
            url: localVarPath,
            baseURL: this.basePath,
            responseType: 'json',
            data: ObjectSerializer.serialize(mosaicIds, "MosaicIds")
        };

        return new Promise<{ response: AxiosResponse; body: Array<MosaicNamesDTO>;  }>((resolve, reject) => {
            axios(localVarRequestOptions).then(
                (response)=>{
                    let body = ObjectSerializer.deserialize(response.data, "Array<MosaicNamesDTO>");
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
     * Get mosaic levy of mosaic.
     * @summary Get mosaic levy information for a mosaic
     * @param mosaicId 
     */
     public async getMosaicLevy (mosaicId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: AxiosResponse; body: MosaicLevyDTO;  }> {
        const localVarPath = '/mosaic/{mosaicId}/levy'
            .replace('{' + 'mosaicId' + '}', encodeURIComponent(String(mosaicId)));;

        // verify required parameter 'mosaicId' is not null or undefined
        if (mosaicId === null || mosaicId === undefined) {
            throw new Error('Required parameter mosaicId was null or undefined when calling getMosaicLevy.');
        }

        let localVarRequestOptions: AxiosRequestConfig = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
            url: localVarPath,
            baseURL: this.basePath,
            responseType: 'json'
        };

        return new Promise<{ response: AxiosResponse; body: MosaicLevyDTO;  }>((resolve, reject) => {
            axios(localVarRequestOptions).then(
                (response)=>{
                    let body = ObjectSerializer.deserialize(response.data, "MosaicLevyDTO");
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
