require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remember modify hidden climb outer super'; 
let testAccounts = [
"0x09fda2a27a8b6af515f4a1d55eb74b92706f887a2f5325455c39c4b475a15215",
"0xd7913c7a97b40d822420809b01830dd40cde89fe79aae6904bc342a4c697b475",
"0xf30f01731cf6afb2020a2543130f14e5d7bf7429c40745655c38c77aca40f631",
"0xc518e019225bfc54bf835c8d05607b0aec41ae0dcafc4474865938c607ae3254",
"0x6def9c1d149bd4e4d450e1a13e3e89bc564960d3cdcb734033b55b73d6682eab",
"0xc77250223ca9a369c6ca871b30e67069d65b4e6f1d4c8f43cb1408fceef55381",
"0x36f4c463e515320f68938661d861fef9113731db211afd76da554acd8a40db36",
"0x2ac130bcd1052bac3452c3e6af20894b32c203ff183a89e35666f359ce2a93df",
"0xaaea1b1343c33bd4e0e17bafebb6b13b91ec1856d115ecb719239598830f0a02",
"0xda3311e6c0da598c99192296e9cd71ee7df911efbb9f8a19003748869146da7c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

