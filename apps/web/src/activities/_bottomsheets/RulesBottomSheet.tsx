import { Box, Typography } from '@mui/material';
import { BottomSheet } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';

const RulesBottomSheet: ActivityComponentType = () => {
  return (
    <BottomSheet>
      <Box height="100%" display="flex" p={4} flexDirection="column" justifyContent="space-between">
        <Typography variant="h3">비타의 이용약관</Typography>
        <Typography variant="h6">이용약관이 곧 작성될 예정입니다.</Typography>
      </Box>
    </BottomSheet>
  );
};

export default RulesBottomSheet;
