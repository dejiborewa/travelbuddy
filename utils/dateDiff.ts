import { differenceInDays } from "date-fns";

export default function dateDiff(dateA: Date, dateB: Date) {
  const result = differenceInDays(dateA, dateB);
  if (result === 0) {
    return "Trip day";
  }

  if (result === 1) {
    return "One day away";
  }
  return `${result} days until trip`;
}
