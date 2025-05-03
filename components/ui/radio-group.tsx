"use client"; // 👈🏽 Add this line FIRST

import * as React from "react";

// Group Props
interface RadioGroupProps {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
}

// Item Props
interface RadioGroupItemProps {
  id: string;
  value: string;
  children?: React.ReactNode;
  isChecked?: boolean;
  onChange?: () => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  defaultValue,
  children,
  className = "",
}) => {
  const [selectedValue, setSelectedValue] = React.useState(defaultValue);

  return (
    <div className={`space-y-2 ${className}`}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<RadioGroupItemProps>,
              {
                isChecked:
                  (child as React.ReactElement<RadioGroupItemProps>).props
                    .value === selectedValue,
                onChange: () =>
                  setSelectedValue(
                    (child as React.ReactElement<RadioGroupItemProps>).props
                      .value
                  ),
              }
            )
          : child
      )}
    </div>
  );
};

export const RadioGroupItem: React.FC<RadioGroupItemProps> = ({
  id,
  value,
  children,
  isChecked = false,
  onChange = () => {},
}) => {
  return (
    <label htmlFor={id} className="flex items-center space-x-2 cursor-pointer">
      <input
        id={id}
        type="radio"
        value={value}
        checked={isChecked} // ✅ Use `checked` instead of `isChecked`
        onChange={onChange}
        className="accent-blue-500"
      />
      <span>{children ?? value}</span>
    </label>
  );
};
