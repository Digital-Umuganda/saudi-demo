import axios from "axios";
import { useEffect, useState } from "react";

// Configs
import { textToSpeechKinConf } from "./configs";

// Error handler
import handleError from "./errors";

export default function useTextToSpeech(language, text) {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!isLoading && text?.length > 0) {
      setIsLoading(true);
      const formData = {
        text: text,
      };

      axios
        .request(textToSpeechKinConf(formData))
        .then((res) => {
          setIsSuccess(true);
          const url = URL.createObjectURL(res.data);
          setData(url);
        })
        .catch((err) => {
          handleError(err);
          setIsSuccess(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [language, text]);

  return { isLoading, isSuccess, data };
}
