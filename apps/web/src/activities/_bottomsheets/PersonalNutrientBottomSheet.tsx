import { BottomSheet } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import { Box, Typography } from '@mui/material';
import { useGetUserInfo } from '../../apis/auth/_hooks/me';
import { useUserMaxNut } from '../../recoil/userDailyNutrient';
import { InfoOutlined } from '@mui/icons-material';

const PersonalNutrientBottomSheet: ActivityComponentType = () => {
  const { data: userInfo } = useGetUserInfo();
  const maxNut = useUserMaxNut();
  return (
    <BottomSheet>
      <Box height="100%" display="flex" gap={1} p={4} flexDirection="column" justifyContent="space-between">
        <Typography variant="h3">{userInfo?.username}님의 추천 영양분</Typography>
        <Typography variant="subtitle1">
          하루 최대 칼로리: <strong>{maxNut.maxCalories}kcal</strong>
        </Typography>
        <Typography variant="subtitle1">
          하루 최대 탄수화물: <strong>{maxNut.maxCarbs}g</strong>
        </Typography>
        <Typography variant="subtitle1">
          하루 최대 칼로리: <strong>{maxNut.maxProteins}g</strong>
        </Typography>
        <Typography variant="subtitle1">
          하루 최대 칼로리: <strong>{maxNut.maxFat}g</strong>
        </Typography>

        <Typography variant="caption" display={'flex'} alignItems={'center'}>
          <InfoOutlined fontSize="small" sx={{ mr: 1 }} />
          탄수화물은 최대 65%의 열량을, 단백질은 최대 35%의 열량을, 지방은 35%의 열량으로 계산되었습니다.
        </Typography>
      </Box>
    </BottomSheet>
  );
};

export default PersonalNutrientBottomSheet;
