import { ChangeEvent, FormEvent, ReactNode } from "react";
import { SingleValue } from "react-select";
import { Option } from "../dropdown/dropdown.props";

export interface DateData {
  startDate: string;
  endDate: string;
  returnDate?: string;
}

interface TripDetailsType {
  editable: boolean;
  handleSubmit?: (e: FormEvent) => void;
  marginTop: string;
  headerComponent: ReactNode;
  handleDateChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  dateData: DateData;
  location?: null | Option;
  setLocation?: (value: SingleValue<Option>) => void;
  locationPlaceholder: ReactNode;
}

export default TripDetailsType;
