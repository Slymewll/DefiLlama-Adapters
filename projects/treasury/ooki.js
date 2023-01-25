const treasuryContract = '0xfedC4dD5247B93feb41e899A09C44cFaBec29Cbc'

let TreasureTokens = [ 
    '0x56d811088235F11C8920698a204A5010a788f4b3', //bzrx
    '0x0De05F6447ab4D22c8827449EE4bA2D5C288379B', //ooki
    //'vbzrx': '0xB72B31907C1C95F3650b64b2469e08EdACeE5e8F', vesting tokens not counted
    '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490', //pool3
]

async function ethTreasury(timestamp, _block, { ethereum: block }) {
    const toa = TreasureTokens.map(t => [t, treasuryContract])
    return sumTokens({}, toa, block, 'ethereum')
  }

module.exports = {
    ethereum:{
        tvl: ethTreasury
    },
};

