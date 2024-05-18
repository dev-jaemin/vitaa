import { Box, Button, styled } from '@mui/material';
import { useRegisterData, useSetRegisterData } from '../../../recoil/auth';
import { Female, Male } from '@mui/icons-material';

const GenderForm = () => {
  const { gender } = useRegisterData();
  const setRegisterData = useSetRegisterData();

  const handleChange = (gender: 'FEMALE' | 'MALE') => {
    setRegisterData(prev => ({ ...prev, gender }));
  };

  return (
    <Box mt={10} display={'flex'} gap={2}>
      <GenderButton variant={gender === 'MALE' ? 'contained' : 'outlined'} onClick={() => handleChange('MALE')}>
        남성
        <Male />
      </GenderButton>
      <GenderButton
        variant={gender === 'FEMALE' ? 'contained' : 'outlined'}
        color="error"
        onClick={() => handleChange('FEMALE')}
      >
        여성
        <Female />
      </GenderButton>
    </Box>
  );
};

const GenderButton = styled(Button)({
  width: '100%',
  height: '80px',
  margin: '10px 0',
  borderRadius: '10px',
});

export default GenderForm;
