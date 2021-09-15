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
import {Address} from '../../../src/model/account/Address';
import { AccountRestrictions, RestrictionModificationType, RestrictionType, AccountRestriction } from '../../../src/model/model';

describe('AccountRestrictions', () => {

    it('should createComplete an AccountRestrictions object', () => {
        const accountRestrictionsDTO = {
            address: Address.createFromEncoded('9050B9837EFAB4BBE8A4B9BB32D812F9885C00D8FC1650E142'),
            restrictions: [{
                restrictionType: RestrictionType.AllowAddress,
                values: [{modificationType: RestrictionModificationType.Add,
                          value: 'SDUP5PLHDXKBX3UU5Q52LAY4WYEKGEWC6IB3VBFM',
                         }],
            }],
        };

        const accountRestrictions = new AccountRestrictions(
            accountRestrictionsDTO.address,
            accountRestrictionsDTO.restrictions.map((r) => {
                return new AccountRestriction(
                    r.restrictionType,
                    r.values,
                );
            }),
        );

        expect(accountRestrictions.address).to.be.equal(accountRestrictionsDTO.address);
        deepStrictEqual(accountRestrictions.restrictions.length, accountRestrictionsDTO.restrictions.length);
        deepStrictEqual(accountRestrictions.restrictions[0].restrictionType, accountRestrictionsDTO.restrictions[0].restrictionType);
        deepStrictEqual(accountRestrictions.restrictions[0].values.length, accountRestrictionsDTO.restrictions[0].values.length);
        deepStrictEqual((accountRestrictions.restrictions[0].values[0] as any).modificationType,
            accountRestrictionsDTO.restrictions[0].values[0].modificationType);
        deepStrictEqual((accountRestrictions.restrictions[0].values[0] as any).value, accountRestrictionsDTO.restrictions[0].values[0].value);
    });
});
