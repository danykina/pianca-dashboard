import { format, isValid, parse } from 'date-fns';

export const getFormattedDate = (datetime: string): string | undefined => {
  const parsedDate = parse(datetime, 'yyyy-MM-dd HH:mm:ss', new Date());

  return isValid(parsedDate)
    ? format(parsedDate, 'dd/MM/yyyy HH:mm')
    : undefined;
};
