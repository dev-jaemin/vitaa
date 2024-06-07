import React from 'react';

import { CameraAltRounded, DeleteOutline } from '@mui/icons-material';
import { Box, Button, Divider, IconButton, Typography, styled } from '@mui/material';
import { FlexContainer } from '../../../components/Containers/ScreenContainer';

interface CameraControlBoxProps {
  capture: () => void;
  upload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeImage: () => void;
  capturedImage: string | null;
  handleClick: () => void;
}
const CameraControlBox: React.FC<CameraControlBoxProps> = ({
  capture,
  upload,
  removeImage,
  capturedImage,
  handleClick,
}) => {
  return (
    <BoxContainer>
      {!capturedImage && (
        <>
          <CaptureButton onClick={capture} fullWidth>
            <CameraAltRounded fontSize="small" />
            <Typography variant="caption" color={'whitesmoke'}>
              &nbsp;촬영
            </Typography>
          </CaptureButton>
          <FlexContainer my={2} width={'100%'} justifyContent={'center'}>
            <Divider sx={{ width: '30%' }} />
            <Typography m={1} variant="caption">
              또는
            </Typography>
            <Divider sx={{ width: '30%' }} />
          </FlexContainer>
        </>
      )}

      {capturedImage ? (
        <FlexContainer width={'100%'} gap={1}>
          <Button variant="contained" onClick={handleClick} fullWidth>
            분석 시작
          </Button>
          <Button variant="outlined" color="error" onClick={removeImage}>
            <DeleteOutline />
          </Button>
        </FlexContainer>
      ) : (
        <UploadBox>
          <Button variant="outlined" fullWidth>
            파일에서 업로드
          </Button>
          <input type="file" accept="image/*" onChange={upload} style={{ height: '52px' }} />
        </UploadBox>
      )}
    </BoxContainer>
  );
};

export default CameraControlBox;

const UploadBox = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: 52,
  display: 'inline-block',
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

const CaptureButton = styled(Button)(({ theme }) => ({
  color: 'white',
  backgroundColor: theme.colors.primary.main,
  '&:hover': {
    backgroundColor: theme.colors.primary.dark,
  },
}));

const BoxContainer = styled(Box)({
  padding: 16,
  zIndex: 100,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});
