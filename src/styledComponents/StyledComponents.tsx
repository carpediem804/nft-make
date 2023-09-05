import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #f6f8fa;
  min-height: 100vh;
`;

export const DropzoneContainer = styled.div`
  width: 400px;
  height: 200px;
  border: 3px dashed #dadce0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e8eaed;
  }
`;

export const FilePreview = styled.div`
  margin-top: 20px;
  width: 400px;
  position: relative;
`;

export const VideoPreview = styled.video`
  max-width: 100%;
`;

export const ImagePreview = styled.img`
  max-width: 100%;
`;

export const ClearButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  padding: 5px 15px;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff4b4b;
  }
`;

export const AudioPreview = styled.audio`
  width: 100%;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: #f6f8fa;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 20px;
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: #34495e;
  margin-bottom: 40px;
  text-align: center;
`;

export const Image = styled.img`
  max-width: 80%;
  border-radius: 15px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
`;

export const LoginButton = styled.button`
  background-color: #2d3748;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1a202c;
  }
`;
