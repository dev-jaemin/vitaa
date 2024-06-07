import React from 'react';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, styled } from '@mui/material';

import { useFlow } from '../../layouts/stackflow';
import { SpaceBetweenContainer } from '../Containers/ScreenContainer';


interface BackHeaderProps {
  secondButtonIcon?: React.ReactNode;
  onClickSecondButton?: () => void;
}

/**
 * 뒤로 가기 버튼이 있는 헤더 (메인 페이지 외에 사용)
 * @param secondButtonIcon { v MUI 아이콘 컴포넌트}
 * @param onClickSecondButton { v 두 번째 버튼 클릭 시 실행할 함수}
 * @returns
 */
const BackHeader: React.FC<BackHeaderProps> = ({ secondButtonIcon, onClickSecondButton }) => {
  const { pop } = useFlow();

  const handleClickBack = () => {
    pop();
  };

  return (
    <HeaderPaper>
      <SpaceBetweenContainer>
        <BackCircle onClick={handleClickBack}>
          <ArrowBackIosIcon fontSize="small" sx={{ marginLeft: 1 }} color="secondary" />
        </BackCircle>
        {secondButtonIcon && <Circle onClick={onClickSecondButton}>{secondButtonIcon}</Circle>}
      </SpaceBetweenContainer>
    </HeaderPaper>
  );
};

export default BackHeader;

const HeaderPaper = styled(Box)({
  height: 64,
  padding: '16px 16px 0 16px',
});

const Circle = styled(Box)(({ theme }) => ({
  borderRadius: '50%',
  width: 52,
  height: 52,
  backgroundColor: theme.colors.primary.main,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.colors.primary.dark,
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const BackCircle = styled(Circle)(({ theme }) => ({
  backgroundColor: theme.colors.secondary.lighter,
  '&:hover': {
    backgroundColor: theme.colors.secondary.light,
  },
}));
