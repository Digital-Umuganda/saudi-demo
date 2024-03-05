const speechToTextKinConf = (data) => {
  return {
    data: data,
    method: "post",
    url: "/transcribe/",
    maxBodyLength: Infinity,
    baseURL: "https://stt.umuganda.digital",
  };
};

const speechToTextEnConf = (data) => {
  return {
    data: data,
    method: "post",
    url: "/transcribe/",
    maxBodyLength: Infinity,
    baseURL: "https://mms.umuganda.digital",
  };
};

const textToSpeechKinConf = (data) => {
  return {
    params: data,
    method: "post",
    responseType: "blob",
    url: "/generate_audio/",
    maxBodyLength: Infinity,
    baseURL: "https://tts.umuganda.digital",
  };
};

const enToKinySpeechConf = (data) => {
  return {
    data: data,
    method: "post",
    url: "/transcribe-english-kinyarwanda",
    maxBodyLength: Infinity,
    baseURL: "https://translate.umuganda.digital",
  };
};

const kinyToEnSpeechConf = (data) => {
  return {
    data: data,
    method: "post",
    url: "/transcribe-kinyarwanda-english",
    maxBodyLength: Infinity,
    baseURL: "https://translate.umuganda.digital",
  };
};

const translateTextConf = (data) => {
  return {
    data: data,
    method: "post",
    url: "/translate/",
    maxBodyLength: Infinity,
    baseURL: "https://nmt-api.umuganda.digital/api/v1",
  };
};

export {
  speechToTextKinConf,
  speechToTextEnConf,
  textToSpeechKinConf,
  enToKinySpeechConf,
  kinyToEnSpeechConf,
  translateTextConf,
};
