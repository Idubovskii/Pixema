import dayjs from 'dayjs';
import 'dayjs/locale/ru';
dayjs.locale('ru');

export function convertTimeToDate(
  string: string | number | Date | undefined,
  format = 'DD/MM/YYYY'
) {
  return dayjs(string).format(format);
}
