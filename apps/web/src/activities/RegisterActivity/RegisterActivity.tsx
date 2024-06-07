import { Box, Button, LinearProgress, Typography } from '@mui/material';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { type ActivityComponentType } from '@stackflow/react';

import { useGetRegisterForm } from './_hooks/useGetRegisterForm';
import GoalForm from './RegisterForms/\bGoal';
import GenderForm from './RegisterForms/Gender';
import NameForm from './RegisterForms/Name';
import NumberForm from './RegisterForms/NumberField';
import { RegisterHeader } from './RegisterHeader';
import { ScreenContainer } from '../../components/Containers/ScreenContainer';

const TOTAL_STEPS = 6;
export const RegisterActivity: ActivityComponentType = () => {
  const { title, description, isDisabled, registerStep, onClick } = useGetRegisterForm();

  const renderForm = () => {
    switch (registerStep) {
      case 1:
        return <NameForm />;
      case 2:
        return <GenderForm />;
      case 3:
        return <NumberForm />;
      case 4:
        return <NumberForm />;
      case 5:
        return <NumberForm />;
      case 6:
        return <GoalForm />;
      default:
        return <NameForm />;
    }
  };
  return (
    <AppScreen>
      <RegisterHeader />
      <ScreenContainer sx={{ height: '100%' }}>
        <Box width={'100%'} my={4}>
          <LinearProgress variant="determinate" value={(registerStep / TOTAL_STEPS) * 100} />
        </Box>
        <Typography variant="h4">회원가입</Typography>
        <Box my={4}>
          <Typography display={'inline'}>{registerStep}</Typography>
          <Typography display={'inline'} color={'primary'}>
            /{TOTAL_STEPS}
          </Typography>
        </Box>
        <Box>
          <Typography textAlign={'center'} variant="h3">
            {title}
          </Typography>
          <Typography mt={2} textAlign={'center'} color={'secondary'}>
            {description?.split('. ').map(desc => (
              <Typography key={desc} variant="body1">
                {desc}
              </Typography>
            ))}
          </Typography>
        </Box>
        <Box width={'100%'}>{renderForm()}</Box>
        <Box my={6}>
          <Button
            sx={{ borderRadius: '50%', width: 80, height: 80 }}
            variant="contained"
            color="primary"
            onClick={onClick}
            disabled={isDisabled}
          >
            NEXT
          </Button>
        </Box>
      </ScreenContainer>
    </AppScreen>
  );
};
