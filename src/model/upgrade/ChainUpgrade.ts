// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file

import { UpgradeDTO } from "../../infrastructure/model/upgradeDTO";
import { UInt64 } from "../UInt64";
import { BlockchainVersion } from "../blockchain/BlockchainVersion"

/**
 * The upgrade structure stores a required chain version at given height as returned from http upgradeRoutesApi.
 */
export class ChainUpgrade {
    constructor(
        public readonly height: UInt64,
        public readonly catapultVersion: BlockchainVersion
    ) {

    }

    public static createFromDTO(upgradeDTO: UpgradeDTO | undefined) {
        if (upgradeDTO) {
            let blockchainVersionHex = new UInt64(upgradeDTO.blockchainVersion).toHex();
            return new ChainUpgrade(
                new UInt64(upgradeDTO.height),
                new BlockchainVersion(
                    parseInt(blockchainVersionHex.substring(12, 16), 16),
                    parseInt(blockchainVersionHex.substring(8, 12), 16),
                    parseInt(blockchainVersionHex.substring(4, 8), 16),
                    parseInt(blockchainVersionHex.substring(0, 4), 16)
                )
            );
        }else{
            throw new Error("upgradeDTO not specified");
        }
    }
}
