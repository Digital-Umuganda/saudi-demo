import axios from "axios";
import { useEffect, useState } from "react";

// Configs
import { enToKinySpeechConf, kinyToEnSpeechConf } from "./configs";

// Error handler
import handleError from "./errors";

export default function useSpeechTranslation(from, to, blob) {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!isLoading && blob) {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("audio_file", blob.blob);

      if (from === "en" && to === "kiny") {
        axios
          .request(enToKinySpeechConf(formData))
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
          .request(kinyToEnSpeechConf(formData))
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
  }, [from, to, blob]);

  return { isLoading, isSuccess, data };
}
