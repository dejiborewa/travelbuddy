import { ReactNode } from "react";
import type { ActionMeta, SingleValue } from "react-select";

export interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  textColor?: string;
  border?: string;
  background?: string;
  placeholder: ReactNode;
  fontWeight?: number;
  fontSize?: string;
  value: Option | null;
  onChange?: (value: SingleValue<Option>, action?: ActionMeta<Option>) => void;
}

export default DropdownProps;
