import { Box, styled, useTheme } from '@mui/material';
import { SpaceBetweenContainer } from '../Containers/ScreenContainer';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useFlow } from '../../layouts/stackflow';
const BackHeader = ({ isHideSecondButton }: { isHideSecondButton?: boolean }) => {
  const { colors } = useTheme();
  const { pop } = useFlow();

  const handleClickBack = () => {
    pop();
  };

  return (
    <HeaderPaper>
      <SpaceBetweenContainer>
        <Circle sx={{ backgroundColor: colors.secondary.lighter }} onClick={handleClickBack}>
          <ArrowBackIosIcon fontSize="small" sx={{ marginLeft: 1 }} color="secondary" />
        </Circle>
        {!isHideSecondButton && <Circle />}
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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
