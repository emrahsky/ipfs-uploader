const { NFTStorage, File } = require('nft.storage')
const fs = require('fs');

// you should get API-KEY from https://nft.storage/

const NFT_STORE_API_KEY = ""

const uploadAsset = async () => {
    try {
        const client = new NFTStorage({ token: NFT_STORE_API_KEY });
        const metaData = await client.store({
            name: "NFT Name",
            description: "Testing IPFS uploader",
            image: new File([await fs.promises.readFile("example.png")], "example.png", {
                type: "image/png",
            }),
        });
        console.log(metaData.url);
        // example : ipfs://bafyreidre3n6avkex3i4fhzdsp54mr7swl5bjxxygt3xoydx44p4mbs53u/metadata.json
    } catch (e) {
        console.log(e.message);
    }
};

uploadAsset();