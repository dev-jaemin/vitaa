import { Box, Button, Typography } from '@mui/material';

export const DeleteMealBtn = ({ handleDeleteMeal }: { handleDeleteMeal: () => void }) => {
  return (
    <Box width={'100%'}>
      <Button variant="outlined" color="error" fullWidth onClick={handleDeleteMeal}>
        음식 정보 삭제
      </Button>
      <Typography variant="caption" mt={1}>
        * 삭제 후 복구가 불가능하니, 신중하게 선택해주세요.
      </Typography>
    </Box>
  );
};
