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

import {Observable} from 'rxjs';
import {BlockchainScore} from '../model/blockchain/BlockchainScore';
import { UInt64 } from '../model/UInt64';
import { RequestOptions } from './RequestOptions';

/**
 * Chain interface repository.
 *
 * @since 1.0
 */
export interface ChainRepository {
    /**
     * Gets current blockchain height
     * @returns Observable<UInt64>
     */
    getBlockchainHeight(requestOptions?: RequestOptions): Observable<UInt64>;

    /**
     * Gets current blockchain score
     * @returns Observable<BlockchainScore>
     */
    getBlockchainScore(requestOptions?: RequestOptions): Observable<BlockchainScore>;
}
