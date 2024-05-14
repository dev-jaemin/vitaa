import { Modal } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useSelectedDateStore } from '../../recoil/selectedDate';
import { Dayjs } from 'dayjs';
import { useFlow } from '../../layouts/stackflow';

const CalendarModal: ActivityComponentType = () => {
  const [selectedDate, setSelectedDate] = useSelectedDateStore();
  const { pop } = useFlow();

  const handleChangeDate = (date: Dayjs) => {
    setSelectedDate(date);
    pop();
  };

  return (
    <Modal>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar value={selectedDate} onChange={handleChangeDate} />
      </LocalizationProvider>
    </Modal>
  );
};

export default CalendarModal;
