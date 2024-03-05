import { toast } from "react-toastify";

export default function handleError(err) {
  switch (err.code) {
    case "ERR_NETWORK":
      toast.info("Please check your internet connection and try again.");
      break;

    case "ERR_BAD_REQUEST":
      toast.error("Please try again.");
      break;

    case "ERR_TIMEOUT":
      toast.error("Request timed out. Please try again.");
      break;

    case "SAME_LANGUAGE":
      toast.error("You cannot translate to the same language.");
      break;

    default:
      break;
  }
}
