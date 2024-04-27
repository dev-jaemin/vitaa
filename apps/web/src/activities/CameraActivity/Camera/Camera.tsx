import { RefObject } from 'react';
import Webcam from 'react-webcam';
import { useActivity } from '@stackflow/react';
import { Box } from '@mui/material';

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
        <Box>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={'100%'}
            height={'100%'}
            videoConstraints={videoConstraints}
          />
        </Box>
      )}
    </>
  );
};

export default Camera;
