import dayjs, { Dayjs } from 'dayjs';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const selectedDateAtom = atom<Dayjs>({
  key: 'selectedDate',
  default: dayjs(new Date()),
});

export const useSelectedDate = () => {
  return useRecoilValue(selectedDateAtom);
};
export const useSetSelectedDate = () => useSetRecoilState(selectedDateAtom);

export const useSelectedDateStore = () => {
  return useRecoilState(selectedDateAtom);
};
