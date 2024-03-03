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

export { speechToTextKinConf, speechToTextEnConf };
