import { MaterialDesignContent } from 'notistack';
import { styled } from '@mui/material';

export const StyledMaterialDesignContent = styled(MaterialDesignContent)({
  backgroundColor: 'rgba(0, 0, 0, 0.80)',
  borderRadius: 12,
  backdropFilter: 'blur(4px)',

  '#notistack-Snackbar': {
    gap: 8,
  },
});

export default StyledMaterialDesignContent;
