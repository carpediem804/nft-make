import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import backgroundImage from 'assets/mainImage.jpg'; // Adjust the path accordingly

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative; // Make sure the container has a relative position
  color: white;
  font-family: 'Arial', sans-serif;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    opacity: 0.5; // Adjust this value as desired
    z-index: -1; // Place the background behind the container content
  }

  // Add this to ensure the background color is on top of the image but behind the content
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #282c34;
    z-index: -2; // Behind the image and content
  }
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
`;

const Description = styled.p`
  font-size: 1.2em;
  max-width: 600px;
  text-align: center;
  margin-bottom: 40px;
  line-height: 1.5;
`;

const LoginButton = styled.button`
  background-color: #6200ea;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3700b3;
  }
`;

const MainScreen: React.FC = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <MainContainer>
      <Title>Make NFT</Title>
      <Description>Create an NFT with your own files</Description>
      <LoginButton onClick={navigateToLogin}>Log in with MetaMask</LoginButton>
    </MainContainer>
  );
};

export default MainScreen;
