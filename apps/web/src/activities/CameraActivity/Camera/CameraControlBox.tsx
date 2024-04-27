import { CameraAltRounded } from '@mui/icons-material';
import { Box, Button, IconButton, Typography, styled } from '@mui/material';
import React from 'react';

interface CameraControlBoxProps {
  capture: () => void;
  upload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const CameraControlBox: React.FC<CameraControlBoxProps> = ({ capture, upload }) => {
  return (
    <BoxContainer>
      <CaptureButton onClick={capture}>
        <CameraAltRounded />
        <Typography variant="caption" color={'whitesmoke'}>
          &nbsp;촬영
        </Typography>
      </CaptureButton>
      <Typography m={2} variant="caption">
        또는
      </Typography>
      <UploadBox>
        <Button variant="outlined" fullWidth>
          파일에서 업로드
        </Button>
        <input type="file" accept="image/*" onChange={upload} />
      </UploadBox>
    </BoxContainer>
  );
};

export default CameraControlBox;

const UploadBox = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
  display: 'inline-block',
  width: '100%',
  '& input': {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 0,
    padding: 0,
    fontSize: '20px',
    cursor: 'pointer',
    opacity: 0,
  },
});

const CaptureButton = styled(IconButton)(({ theme }) => ({
  color: 'white',
  backgroundColor: theme.colors.primary.main,
  '&:hover': {
    backgroundColor: theme.colors.primary.dark,
  },
  borderRadius: 24,
  padding: 16,
}));

const BoxContainer = styled(Box)({
  padding: 16,
  zIndex: 100,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});
