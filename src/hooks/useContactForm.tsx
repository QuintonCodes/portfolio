import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

// Form validation schema
const schema = yup.object({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  service: yup.string().required("Please select a service"),
  message: yup.string().required("Message is required"),
});

// Form data interface
export interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const useContactForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [formStatus, setFormStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (
    data: FormData,
    e: React.BaseSyntheticEvent | undefined
  ) => {
    setIsLoading(true);
    try {
      if (!e?.target) throw new Error("Form reference is missing");

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setFormStatus({ success: true, message: "Message sent successfully!" });
      reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      setFormStatus({
        success: false,
        message: "Failed to send the message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const renderError = (field: keyof FormData) => {
    const error = errors[field];
    if (error && "message" in error) {
      return <p className="text-red-500">{error.message as string}</p>;
    }
    return null;
  };

  return {
    register,
    handleSubmit,
    control,
    isLoading,
    formStatus,
    onSubmit,
    renderError,
  };
};
