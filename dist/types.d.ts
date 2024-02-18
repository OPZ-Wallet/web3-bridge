import { EIP1193Provider } from '@web3-onboard/common';
export interface CustomWindow extends Window {
    ethereum: EIP1193Provider & {
        isOPZ?: boolean;
    };
    $opz: EIP1193Provider;
}
