import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import styled from 'styled-components';
import {
  AudioPreview,
  ClearButton,
  Container,
  DropzoneContainer,
  FilePreview,
  ImagePreview,
  VideoPreview,
} from 'styledComponents/StyledComponents';
import { PreviewType } from 'utils/types';

function FileDrop() {
  const [file, setFile] = useState<File | null>(null);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: useCallback(
      (acceptedFiles: React.SetStateAction<File | null>[]) => {
        setFile(acceptedFiles[0]);
      },
      [],
    ),
    multiple: false,
    accept: {
      'image/*': [],
      'video/*': [],
      'audio/*': [],
    },
  });

  const clearPreview = () => {
    setFile(null);
  };

  return (
    <Container>
      <DropzoneContainer {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag or drop a file here, or click to select one</p>
      </DropzoneContainer>

      {file && (
        <FilePreview>
          {file.type.startsWith('image/') && (
            <ImagePreview src={URL.createObjectURL(file)} />
          )}
          {file.type.startsWith('video/') && (
            <VideoPreview controls src={URL.createObjectURL(file)} />
          )}
          {file.type.startsWith('audio/') && (
            <AudioPreview controls src={URL.createObjectURL(file)} />
          )}
          <ClearButton onClick={clearPreview}>Clear</ClearButton>
        </FilePreview>
      )}
    </Container>
  );
}

export default FileDrop;
