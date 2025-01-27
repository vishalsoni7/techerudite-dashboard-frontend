import { toast } from "react-hot-toast";
import { SOMETHING_WENT_WRONG } from "../constant/messages";

export const showSuccessToast = (message: string) => {
  toast.success(message, {
    icon: "✅",
  });
};

export const showErrorToast = (message: string = SOMETHING_WENT_WRONG) => {
  toast.error(message, {
    icon: "❌",
  });
};
