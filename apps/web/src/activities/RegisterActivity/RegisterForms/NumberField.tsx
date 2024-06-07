import { Box, TextField } from '@mui/material';

import { useRegisterData, useSetRegisterData, useRegisterStep } from '../../../recoil/auth';

const NumberForm = () => {
  const registerData = useRegisterData();
  const setRegisterData = useSetRegisterData();

  const [registerStep, setRegisterStep] = useRegisterStep();

  const fieldLabel = registerStep === 3 ? '나이' : registerStep === 4 ? '키' : '몸무게';
  const fieldName = registerStep === 3 ? 'age' : registerStep === 4 ? 'height' : 'weight';
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({ ...prev, [name]: Number(value) }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (registerStep === 3 && registerData.age > 0) {
        setRegisterStep(registerStep + 1);
        return;
      }
      if (registerStep === 4 && registerData.height > 0) {
        setRegisterStep(registerStep + 1);
        return;
      }
      if (registerStep === 5 && registerData.weight > 0) {
        setRegisterStep(registerStep + 1);
        return;
      }
    }
  };

  return (
    <Box mt={10} display={'flex'} justifyContent={'center'}>
      <TextField
        type="number"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        variant="outlined"
        name={fieldName}
        label={fieldLabel}
        value={registerData[fieldName]}
      />
    </Box>
  );
};

export default NumberForm;
