import { Box, Button, Divider, TextField, Typography, styled } from '@mui/material';

import { useRegisterData, useSetRegisterData } from '../../../recoil/auth';

const DEFAULT_GOALS = ['다이어트', '근육 증가', '체력 향상', '건강 관리'];

const GoalForm = () => {
  const { goal } = useRegisterData();
  const setRegisterData = useSetRegisterData();

  const handleClickButton = (defaultGoal: string) => {
    setRegisterData(prev => ({ ...prev, goal: defaultGoal }));
  };

  const handleChangeGoal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setRegisterData(prev => ({ ...prev, goal: value }));
  };

  return (
    <Box mt={10} display={'flex'} flexDirection={'column'}>
      {DEFAULT_GOALS.map((defaultGoal, index) => {
        return (
          <GoalButton
            onClick={() => {
              handleClickButton(defaultGoal);
            }}
            key={index + goal}
            variant={defaultGoal === goal ? 'contained' : 'outlined'}
          >
            {defaultGoal}
          </GoalButton>
        );
      })}
      <Typography variant="caption" textAlign={'center'} style={{ marginTop: 10 }}>
        또는 직접 입력
      </Typography>
      <Divider sx={{ marginY: 1 }} />
      <TextField onChange={handleChangeGoal} variant="outlined" style={{ marginTop: 10 }} value={goal} />
    </Box>
  );
};

const GoalButton = styled(Button)({
  margin: '10px 0',
  borderRadius: '10px',
  height: '53px',
  display: 'flex',
  justifyContent: 'start',
});

export default GoalForm;
