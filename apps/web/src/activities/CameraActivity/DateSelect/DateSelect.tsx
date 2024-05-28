import { Box, MenuItem, Select, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { MEAL_TIME, MealTime } from '../../../types/meal';

interface DateSelectProps {
  selectedMealDate: { date: Dayjs; meal: MealTime };
  onDateChange: (name: string, value: Dayjs | MealTime | null) => void;
}
export const DateSelect = ({ selectedMealDate, onDateChange }: DateSelectProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box mt={4} p={2}>
        <Typography variant="h4" textAlign="center">
          날짜와 식사를 선택해주세요
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" gap={1} p={2}>
        <DatePicker
          value={selectedMealDate.date}
          onChange={value => {
            onDateChange('date', value);
          }}
        />
        <Select
          value={selectedMealDate.meal}
          onChange={e => {
            onDateChange('meal', e.target.value as MealTime);
          }}
        >
          <MenuItem value={MEAL_TIME.BREAKFAST}>아침</MenuItem>
          <MenuItem value={MEAL_TIME.LUNCH}>점심</MenuItem>
          <MenuItem value={MEAL_TIME.DINNER}>저녁</MenuItem>
          <MenuItem value={MEAL_TIME.SNACK}>간식</MenuItem>
        </Select>
      </Box>
    </LocalizationProvider>
  );
};
