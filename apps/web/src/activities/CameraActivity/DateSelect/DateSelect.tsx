import { Box, MenuItem, Select, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';

import { MEAL_TIME, MealTime } from '../../../types/Meal';

interface DateSelectProps {
  selectedMealDate: { date: Dayjs; category: MealTime };
  onDateChange: (name: string, value: Dayjs | MealTime | null) => void;
}
export const DateSelect = ({ selectedMealDate, onDateChange }: DateSelectProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box mt={10} mb={2} px={2}>
        <Typography variant="h4" color="secondary">
          날짜와 식사를 선택해주세요
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" gap={1} px={2} mt={1}>
        <DatePicker
          sx={{ width: '100%' }}
          value={selectedMealDate.date}
          onChange={value => {
            onDateChange('date', value);
          }}
        />
        <Select
          fullWidth
          value={selectedMealDate.category}
          onChange={e => {
            onDateChange('category', e.target.value as MealTime);
          }}
        >
          <MenuItem value={MEAL_TIME.BREAKFAST}>🍳 아침</MenuItem>
          <MenuItem value={MEAL_TIME.LUNCH}>🍱 점심</MenuItem>
          <MenuItem value={MEAL_TIME.DINNER}>🍜 저녁</MenuItem>
          <MenuItem value={MEAL_TIME.SNACK}>🍡 간식</MenuItem>
        </Select>
      </Box>
    </LocalizationProvider>
  );
};
