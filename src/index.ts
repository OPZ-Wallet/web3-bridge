import type { WalletInit, EIP1193Provider } from '@web3-onboard/common'
import { CustomWindow } from './types.js'
declare const window: CustomWindow

function opz(): WalletInit {
  if (typeof window === 'undefined') return () => null

  return () => {
    return {
      label: 'OPZ Wallet',
      getIcon: async () => (await import('./icon.js')).default,
      getInterface: async () => {
        const ethereumInjectionExists = window.hasOwnProperty('ethereum')

        let provider: EIP1193Provider

        // check if opz is injected into window.ethereum
        if (ethereumInjectionExists && window['ethereum'].isOPZ) {
          provider = window['ethereum']
        } else if (window['$opz']) {
          // directly use the window.opzwallet injection
          provider = window['$opz']
        } else {
          // opzwallet extension is not installed
          // send user to install page
          window.open('https://opz.com', '_blank')
          throw new Error('Please Install OPZ to use this wallet')
        }

        return {
          provider
        }
      }
    }
  }
}

export default opz
