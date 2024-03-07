import axios from "axios";
import { useEffect, useState } from "react";

// Configs
import { speechToTextEnConf, speechToTextKinConf } from "./configs";

// Error handler
import handleError from "./errors";

export default function useSpeechToText(language, blob) {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (blob && !isLoading) {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("file", blob.blob, blob.type);

      switch (language) {
        case "rw":
          axios
            .request(speechToTextKinConf(formData))
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
          break;

        case "lin":
          axios
            .request(speechToTextEnConf(formData))
            .then((res) => {
              setIsSuccess(true);
            })
            .catch((err) => {
              handleError(err);
              setIsSuccess(false);
            })
            .finally(() => {
              setIsLoading(false);
            });
          break;

        default:
          setIsLoading(false);
          break;
      }
    }
  }, [language, blob]);

  return { isLoading, isSuccess, data };
}
