function opz() {
    if (typeof window === 'undefined')
        return () => null;
    return () => {
        return {
            label: 'OPZ Wallet',
            getIcon: async () => (await import('@web3-onboard/opz/dist/icon.js')).default,
            getInterface: async () => {
                const ethereumInjectionExists = window.hasOwnProperty('ethereum');
                let provider;
                // check if opz is injected into window.ethereum
                if (ethereumInjectionExists && window['ethereum'].isOPZ) {
                    provider = window['$opz'];
                    // provider = window['ethereum'];
                }
                else if (window['$opz']) {
                    // directly use the window.$opz injection
                    provider = window['$opz'];
                }
                else {
                    // opzwallet extension is not installed
                    // send user to install page
                    window.open('https://opz.com', '_blank');
                    throw new Error('Please Install OPZ to use this wallet');
                }
                return {
                    provider
                };
            }
        };
    };
}
export default opz;
