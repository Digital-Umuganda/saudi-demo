exports.formatTime = (seconds) =>
  [seconds / 60, seconds % 60]
    .map((v) => `0${Math.floor(v)}`.slice(-2))
    .join(":");

exports.decodeBinary = (binary) => {
  // Convert the binary data to an array buffer
  const arrayBuffer = new ArrayBuffer(binary.length);
  const uint8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < binary.length; i++) {
    uint8Array[i] = binary.charCodeAt(i) & 0xff;
  }

  const blob = new Blob([arrayBuffer], { type: "audio/wav" });
  return blob;
};
