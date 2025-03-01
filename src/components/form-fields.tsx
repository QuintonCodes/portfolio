import { ContactFormData, ServiceProps } from "@/lib/types";
import { InputHTMLAttributes, JSX } from "react";
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

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  register: ReturnType<UseFormRegister<ContactFormData>>;
  renderError?: (field: string) => JSX.Element | null;
  type: string;
}

export function InputField({
  placeholder,
  register,
  renderError,
  type,
  ...props
}: InputFieldProps) {
  return (
    <div>
      <Input placeholder={placeholder} type={type} {...props} {...register} />
      {renderError && renderError(register.name)}
    </div>
  );
}

interface SelectFieldProps {
  control?: Control<ContactFormData>;
  name: keyof ContactFormData;
  options: ServiceProps[];
  renderError?: (field: string) => JSX.Element | null;
}

export function SelectField({
  control,
  name,
  options,
  renderError,
}: SelectFieldProps) {
  return (
    <div>
      <Controller
        control={control}
        defaultValue=""
        name={name}
        render={({ field }) => (
          <>
            <Select
              aria-label="Select a service"
              name={field.name}
              onValueChange={field.onChange}
              value={field.value}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  {options.map((option, index) => (
                    <SelectItem key={index} value={option.title}>
                      {option.title}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <input name={name} type="hidden" value={field.value} />
          </>
        )}
      />
      {renderError && renderError(name)}
    </div>
  );
}
