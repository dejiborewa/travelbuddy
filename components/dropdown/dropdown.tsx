import type { FC } from "react";
import Select from "react-select";

import type DropdownProps from "./dropdown.props";

const Dropdown: FC<DropdownProps> = ({
  options,
  textColor = "black",
  border = "1.43745px solid rgba(104, 104, 104, 0.5)",
  background = "#fff",
  placeholder,
  fontWeight = "normal",
  fontSize = "16px",
  onChange,
  value
}) => {
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: `${background}`,
      color: "black",
      outline: "none",
      border: `${border}`,
      boxShadow: "none",
      cursor: "pointer",
      borderRadius: "47.915px",
      paddingTop: "4px",
      paddingBottom: "4px",
      fontWeight,
      fontSize
    }),

    options: (provided: any) => ({
      ...provided,
      textAlign: "left"
    }),

    singleValue: (provided: any) => ({
      ...provided,
      color: `${textColor}`,
      textAlign: "left"
    }),

    menu: (provided: any) => ({
      ...provided,
      textAlign: "left"
    }),

    menuList: (provided: any) => ({
      ...provided,
      cursor: "pointer"
    }),

    valueContainer: (provided: any) => ({
      ...provided
    }),

    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: "none"
    }),

    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: "black",
      position: "relative"
    }),

    placeholder: (provided: any) => ({
      ...provided,
      color: "black",
      textAlign: "center"
    })
  };

  return (
    <div className="w-full text-[12px] md:text-base">
      <Select
        options={options}
        styles={customStyles}
        value={value}
        placeholder={<>{placeholder}</>}
        onChange={onChange}
      />
    </div>
  );
};

export default Dropdown;
