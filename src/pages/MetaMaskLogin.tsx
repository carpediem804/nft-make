// MetaMaskLogin.tsx

import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import FileUpload from 'components/Fileupload';
import FileDrop from 'components/FileDrop';

const MetaMaskLogin: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    checkMetaMaskInstallation();
  }, []);

  const checkMetaMaskInstallation = async (): Promise<void> => {
    const provider: any = await detectEthereumProvider();

    if (provider) {
      // MetaMask is installed
      initializeWeb3(provider);
    } else {
      console.log('Please install MetaMask!');
    }
  };

  const initializeWeb3 = (provider: any): void => {
    const web3Instance = new Web3(provider);
    fetchAccount(web3Instance);
  };

  const fetchAccount = async (web3Instance: Web3): Promise<void> => {
    const accounts: string[] = await web3Instance.eth.getAccounts();
    if (accounts.length > 0) {
      setAccount(accounts[0]);
      console.log('accounts :', accounts);
    } else {
      console.log('No accounts found. Please connect MetaMask.');
    }
  };

  const handleLogin = async (): Promise<void> => {
    const provider: any = await detectEthereumProvider();
    if (provider) {
      try {
        const newAccounts: string[] = await provider.request({
          method: 'eth_requestAccounts',
        });
        console.log('newAccount : ', newAccounts);
        setAccount(newAccounts[0]);
      } catch (error: any) {
        console.error('User denied account connection:', error);
      }
    }
  };

  const instructMetaMaskLogout = (): void => {
    alert(
      'To logout from MetaMask, please open the MetaMask extension and log out from there.',
    );
  };

  const handleLogout = (): void => {
    setAccount(null);
    instructMetaMaskLogout();
  };

  return (
    <div>
      {account ? (
        <>
          <div>Connected with MetaMask: {account}</div>
          {/* <FileUpload /> */}
          <FileDrop />
          <button onClick={handleLogout}>logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Connect to MetaMask</button>
      )}
    </div>
  );
};

export default MetaMaskLogin;
