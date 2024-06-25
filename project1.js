let nftDatabase = {};
let nftCounter = 0;

const mintNft = (name, description) => {
    nftCounter++;
    const nft = {
        id: nftCounter,
        name: name,
        description: description
    };
    nftDatabase[nftCounter] = nft;
};

const listNfts = () => {
    for (const id in nftDatabase) {
        const nft = nftDatabase[id];
        console.log(`NFT ID: ${nft.id}`);
        console.log(`Name: ${nft.name}`);
        console.log(`Description: ${nft.description}`);
    }
};

const getTotalSupply = () => {
    console.log(`Total number of NFTs: ${Object.keys(nftDatabase).length}`);
};

// Test the functions
mintNft("First NFT", "This is the first NFT created");
mintNft("Second NFT", "This is the second NFT created");

console.log("Listing all NFTs:");
listNfts();

console.log("Getting total supply:");
getTotalSupply();
