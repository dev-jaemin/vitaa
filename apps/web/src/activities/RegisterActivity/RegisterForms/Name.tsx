import { Box, TextField } from '@mui/material';

import { useRegisterData, useSetReigsterStep, useSetRegisterData } from '../../../recoil/auth';

const NameForm = () => {
  const registerData = useRegisterData();
  const setRegisterData = useSetRegisterData();
  const setRegisterStep = useSetReigsterStep();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData(prev => ({ ...prev, username: e.target.value }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (registerData.username.length > 0) {
        setRegisterStep(2);
      }
    }
  };
  return (
    <Box mt={10}>
      <TextField
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        fullWidth
        variant="outlined"
        label="닉네임"
        value={registerData.username}
      />
    </Box>
  );
};

export default NameForm;
