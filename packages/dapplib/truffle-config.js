require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name reflect rural social give knee tackle gas'; 
let testAccounts = [
"0x922da1486dc77dc8c4d91d48b8260c1d48473c9185fb87802a9f4bfad5f733b9",
"0x2119e23135e59c0b9b4679782482be0405ffea96018ad0e6584c4987e04f3914",
"0x3b0b1883f05d3740ead706dfb68a6a434b152396becbfead13ba4c1f3000024f",
"0x7d4d7b49db6f1e925e686367ab2f2153a9444315269a45bd48eba9ea11881ab7",
"0x36385b8f043958c67ccd97b084bc2a1814af9d3337a1508e7f95c2a8f5bb78e2",
"0xd7c66dadc4b121a24dd4b1a774ed727b4011e1c51b3ecd0e8271dc21f91b6f3b",
"0xe63d0f668ad91899e021cbaf1eea7859a4982d5dde1ca8a7307c494e09295f8f",
"0x61c91a5572b9ed86f6203a85493bb62c054a3cd02700dd544439c0474d20518b",
"0x82c7c611f30b84c1f13e3324cbc87da5d1c5c3c04560f470e2dfbea5ce95eb54",
"0x43c841681bf9804f9420f273b3d22b5664d444ed001b98dea5d531097202fc58"
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

