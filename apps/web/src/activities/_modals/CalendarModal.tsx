import { Modal } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useSelectedDateStore } from '../../recoil/selectedDate';
import { Dayjs } from 'dayjs';

const CalendarModal: ActivityComponentType = () => {
  const [selectedDate, setSelectedDate] = useSelectedDateStore();

  const handleChangeDate = (date: Dayjs) => {
    setSelectedDate(date);
  };

  return (
    <Modal>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar defaultValue={selectedDate} onChange={handleChangeDate} />
      </LocalizationProvider>
    </Modal>
  );
};

export default CalendarModal;
