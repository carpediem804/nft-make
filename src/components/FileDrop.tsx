import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import styled from 'styled-components';
import { PreviewType } from 'utils/types';

const StyledContainer = styled.div`
  font-family: 'Arial', sans-serif;
  max-width: 600px;
  margin: 50px auto;
  border-radius: 15px;
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
`;

const DropZoneArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: #f7f9fc;
  color: #5a5a5a;
  border: 2px dashed #8c8c8c;
  transition: background-color 0.3s;
  &:hover {
    background-color: #eef1f6;
  }
`;

const PreviewArea = styled.div`
  position: relative;
`;

const PreviewImage = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
`;

const PreviewVideo = styled.video`
  width: 100%;
  display: block;
`;

const ClearButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
`;

function FileDrop() {
  const [previewSrc, setPreviewSrc] = useState<string | undefined>(undefined);
  const [previewType, setPreviewType] = useState<PreviewType>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    const file = acceptedFiles[0];
    const objectUrl = URL.createObjectURL(file);

    setPreviewSrc(objectUrl);

    if (file.type.startsWith('image')) {
      setPreviewType('image');
    } else if (file.type.startsWith('video')) {
      setPreviewType('video');
    } else if (file.type.startsWith('audio')) {
      setPreviewType('audio');
    }

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      'image/*': [],
      'video/*': [],
      'audio/*': [],
    },
  });

  const clearPreview = () => {
    setPreviewSrc(undefined);
    setPreviewType(null);
    console.log('clear Preview');
  };

  const renderPreview = () => {
    if (previewType === 'image') {
      return <PreviewImage src={previewSrc} alt="Preview" />;
    } else if (previewType === 'video') {
      return <PreviewVideo src={previewSrc} controls />;
    } else if (previewType === 'audio') {
      return <audio src={previewSrc} controls />;
    }
    return null;
  };

  return (
    <StyledContainer>
      <DropZoneArea {...getRootProps()}>
        <input {...getInputProps()} />
        Drag & drop a file here, or click to select one
      </DropZoneArea>
      {previewSrc && (
        <PreviewArea>
          <ClearButton onClick={clearPreview}>X</ClearButton>
          {renderPreview()}
        </PreviewArea>
      )}
    </StyledContainer>
  );
}

export default FileDrop;
