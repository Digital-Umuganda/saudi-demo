import axios from "axios";
import { useEffect, useState } from "react";

// Configs
import { translateTextConf } from "./configs";

// Handle errors
import handleError from "./errors";

export default function useMachineTranslation(from, to, text) {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!isLoading && text.length > 0) {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("text", text);
      formData.append("src", from);
      formData.append("tgt", to);

      if (from === "en" && to === "kiny") {
        axios
          .request(translateTextConf(formData))
          .then((res) => {
            setIsSuccess(true);
            setData(res.data);
          })
          .catch((err) => {
            handleError(err);
            setIsSuccess(false);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } else if (from === "kiny" && to === "en") {
        axios
          .request(translateTextConf(formData))
          .then((res) => {
            setIsSuccess(true);
            setData(res.data);
          })
          .catch((err) => {
            handleError(err);
            setIsSuccess(false);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } else {
        setIsSuccess(false);
        setIsLoading(false);
        handleError({ code: "SAME_LANGUAGE" });
        return;
      }
    }
  }, [from, to, text]);

  return { isLoading, isSuccess, data };
}
