// MetaMaskLogin.tsx

import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import FileDrop from 'components/FileDrop';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #ffffff; // Assuming MainPage has a white background
  gap: 16px;
  padding: 20px;
`;

const Button = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background-color: #6200ea; // Primary color
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #3700b3;
  }
`;

const CardContainer = styled.div`
  background-color: #f5f5f5; // Card background color
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 16px;
  word-break: break-word;
  max-width: 600px;
  width: 100%;
  max-height: 60vh;
  text-align: center;
`;

const AccountInfo = styled(CardContainer)``;

const FileDropContainer = styled(CardContainer)`
  border: 1px dashed #aaa;
`;

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
    <Container>
      {account ? (
        <>
          <AccountInfo>Connected with MetaMask: {account}</AccountInfo>
          <Button onClick={handleLogout}>Logout</Button>
          <FileDropContainer>
            <FileDrop />
          </FileDropContainer>
        </>
      ) : (
        <Button onClick={handleLogin}>Connect to MetaMask</Button>
      )}
    </Container>
  );
};

export default MetaMaskLogin;
