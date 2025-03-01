import { toast } from "react-toastify";

export const useToaster = () => {
  const showSuccess = (message: string) => {
    toast.success(message, {
      autoClose: 5000,
      closeOnClick: true,
      draggable: true,
      hideProgressBar: false,
      pauseOnHover: true,
      position: "bottom-right",
    });
  };

  const showError = (message: string) => {
    toast.error(message, {
      autoClose: 5000,
      closeOnClick: true,
      draggable: true,
      hideProgressBar: false,
      pauseOnHover: true,
      position: "bottom-right",
    });
  };

  return {
    showError,
    showSuccess,
  };
};
