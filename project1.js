var nftCollection = [];

mintNFT = (nftName, nftId, nftDescription) => {
    const nftObject = {
        name: nftName,
        nftId: nftId,
        detail: nftDescription
    };

    nftCollection.push(nftObject);
};

listNFTs = () => {
    nftCollection.forEach((nft, index) => {
        console.log(`NFT #${index + 1}`);
        console.log(`Name: ${nft.name}`);
        console.log(`NtfId: ${nft.nftId}`);
        console.log(`Details: ${nft.detail}`);
    });
};

getTotalSupply = () => {
    const count = nftCollection.length;
    console.log(`Total no. of Nft's are ${count}`);
};
