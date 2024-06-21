let nftDatabase = {};
let nftCounter = 0;

let mintNft = (name, description) =>{
    nftCounter++;
    let newNft = {
        id: nftCounter,
        name: name,
        description: description
    };
    nftDatabase[nftCounter] = newNft;
};

let listNfts = () =>{
    for(const id in nftDatabase){
        const nft = nftDatabase[id];
        console.log(`NFT ID: ${nft.id}`);
        console.log(`Name: ${nft.name}`);
        console.log(`Description: ${nft.description}`);
    }
};

let getTotalSupply = () =>{
    console.log(Object.keys(nftDatabase).length);
};


