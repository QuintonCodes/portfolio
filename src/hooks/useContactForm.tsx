import { ContactFormData, contactSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { useToaster } from "./useToaster";

export const useContactForm = () => {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const { showError, showSuccess } = useToaster();

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    try {
      const response = await axios.post("/api/send-email", data);

      if (response.status !== 200) {
        throw new Error(response.data.error || "An unknown error occurred.");
      }

      showSuccess("Message sent successfully!");
      reset();
    } catch (error) {
      showError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
      reset();
    }
  };

  const renderError = (field: keyof ContactFormData) => {
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
    isLoading: isSubmitting,
    onSubmit,
    renderError,
  };
};
