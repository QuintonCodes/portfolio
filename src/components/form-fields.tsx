import { FormData } from "@/hooks/useContactForm";
import { JSX } from "react";
import { Control, Controller, UseFormRegister } from "react-hook-form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface InputFieldProps {
  type: string;
  placeholder: string;
  register: ReturnType<UseFormRegister<FormData>>;
  renderError?: (field: string) => JSX.Element | null;
}

export const InputField = ({
  type,
  placeholder,
  register,
  renderError,
}: InputFieldProps) => {
  return (
    <div>
      <Input type={type} placeholder={placeholder} {...register} />
      {renderError && renderError(register.name)}
    </div>
  );
};

interface SelectFieldProps {
  control?: Control<FormData>;
  name: keyof FormData;
  options: { value: string; label: string }[];
  renderError?: (field: string) => JSX.Element | null;
}

export const SelectField = ({
  control,
  name,
  options,
  renderError,
}: SelectFieldProps) => {
  return (
    <div>
      <Controller
        name="service"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <>
            <Select
              aria-label="Select a service"
              onValueChange={field.onChange}
              value={field.value}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <input type="hidden" value={field.value} name={name} />
          </>
        )}
      />
      {renderError && renderError(name)}
    </div>
  );
};
