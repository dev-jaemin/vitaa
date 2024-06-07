import { RefObject, useState } from 'react';
import Webcam from 'react-webcam';

import { Box, styled } from '@mui/material';
import { useActivity } from '@stackflow/react';
import { ImageBox } from '..';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
};

const Camera = ({ webcamRef }: { webcamRef: RefObject<Webcam> }) => {
  const activityState = useActivity();
  const isActive = activityState.isActive;

  return (
    <>
      {isActive && (
        <ImageBox>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={'100%'}
            height={'100%'}
            videoConstraints={videoConstraints}
          />
        </ImageBox>
      )}
    </>
  );
};

export default Camera;

const BoxContainer = styled(Box)(() => ({
  borderRadius: 24,
  marginTop: '18px',
  padding: 16,
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  transition: 'background-color 0.3s',
  '&:active': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
}));
