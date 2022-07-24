var Wallet = require('ethereumjs-wallet');

for(i = 0; i < 10; i++) {
    const EthWallet = Wallet.default.generate();
    console.log("address: " + EthWallet.getAddressString());
    console.log("privateKey: " + EthWallet.getPrivateKeyString());
}