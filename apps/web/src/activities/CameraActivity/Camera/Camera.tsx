import { useCallback, useRef } from 'react';
import Webcam from 'react-webcam';
import { useSetCapturedImage } from '../_store/capturedImage';
import { useFlow } from '../../../layouts/stackflow';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
};

const Camera = () => {
  const webcamRef = useRef<Webcam>(null);
  const { push } = useFlow();

  const setImage = useSetCapturedImage();

  const handleClick = () => {
    push('CapturedActivity', {});
  };

  const capture = useCallback(() => {
    if (!webcamRef.current) return;
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    handleClick();
  }, [webcamRef]);

  return (
    <>
      <Webcam
        audio={false}
        height={'auto'}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={'100%'}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>촬영</button>
    </>
  );
};

export default Camera;
