const {Web3}=require("web3");
const Abi=require("./../artifacts/contracts/MyNFT.sol/MyNFT.json");
const ABI=Abi.abi;
const PUBLIC_KEY="0xBE43a8bE5804853F7e0bEA3E09D610456062C012";
const PRIVATE_KEY="31edab02511a557acb2eabc1b9462ec628fe8dd4ad2fd40216e12fae7490fae3";
const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/92bJ6_urd8GlhwZ1aVr6obRof9XsdP97")
const contractAddress="0xcd42023818E9705C30c7389dD7e0fE1bf7493D1f";
const contract=new web3.eth.Contract(ABI,contractAddress);

async function mintNFT(tokenURI){
    const nonce=await web3.eth.getTransactionCount(PUBLIC_KEY,"latest");

    const tx={
        from:PUBLIC_KEY,
        to:contractAddress,
        nonce:nonce,
        gas:500000,
        gasPrice: await web3.eth.getGasPrice(),
        data:contract.methods.mintNFT(PUBLIC_KEY,tokenURI).encodeABI(),
    };
    
    const signPromise = web3.eth.accounts.signTransaction(tx,PRIVATE_KEY);

    signPromise.then((signedTx) => {
      // raw transaction string may be available in .raw or 
      // .rawTransaction depending on which signTransaction
      // function was called
      const sentTx = web3.eth.sendSignedTransaction(signedTx.raw || signedTx.rawTransaction);
      sentTx.on("receipt", receipt => {
        console.log("receipt",receipt)
        // do something when receipt comes back
      });
      sentTx.on("error", err => {
        console.log("transaction error",err)
        // do something on transaction error
      });
    }).catch((err) => {
      console.log("error promises fail",err)
      // do something when promise fails
    });
 
}
mintNFT("https://tomato-immense-tapir-963.mypinata.cloud/ipfs/QmSqTojHfaUuXbg5n6ULgfuwvi1q8cgpLsaenJk1MWCYtF?_gl=1*1ez9gvl*_ga*NzQxMTMzMTkzLjE2OTgzODAyMzU.*_ga_5RMPXG14TE*MTY5ODM4MDIzNS4xLjEuMTY5ODM4MjQ1OC4zNC4wLjA.");