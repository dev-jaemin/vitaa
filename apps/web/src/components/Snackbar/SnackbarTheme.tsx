import { styled } from '@mui/material';
import { MaterialDesignContent } from 'notistack';

export const StyledMaterialDesignContent = styled(MaterialDesignContent)({
  backgroundColor: 'rgba(0, 0, 0, 0.80)',
  borderRadius: 12,
  backdropFilter: 'blur(4px)',

  '#notistack-Snackbar': {
    gap: 8,
  },
});

export default StyledMaterialDesignContent;
