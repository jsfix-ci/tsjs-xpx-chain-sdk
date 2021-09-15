/*
 * Copyright 2018 NEM
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

import {deepStrictEqual} from 'assert';
import {expect} from 'chai';
import {NetworkCurrencyMosaic} from '../../../src/model/mosaic/NetworkCurrencyMosaic';
import {NamespaceId} from '../../../src/model/namespace/NamespaceId';

describe('NetworkCurrencyMosaic', () => {

    it('should createComplete an NetworkCurrencyMosaic object', () => {

        const currency = NetworkCurrencyMosaic.createRelative(1000);

        deepStrictEqual(currency.id.id.toHex(), 'bffb42a19116bdf6'); // holds NAMESPACE_ID
        expect(currency.amount.compact()).to.be.equal(1000 * 1000000);
    });

    it('should set amount in smallest unit when toDTO()', () => {

        const currency = NetworkCurrencyMosaic.createRelative(1000);
        expect(currency.toDTO().amount[0]).to.be.equal(1000 * 1000000);
    });

    it('should have valid hardcoded default properties', () => {
        const m = NetworkCurrencyMosaic.createAbsolute(0);
        deepStrictEqual(m.ID.id, new NamespaceId([2434186742, 3220914849]).id);
        expect(m.DIVISIBILITY).to.be.equal(6);
        expect(m.TRANSFERABLE).to.be.equal(true);
        expect(m.SUPPLY_MUTABLE).to.be.equal(false);
    });
});
