import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import { useWavesurfer } from "@wavesurfer/react";
import { useCallback, useRef, useState } from "react";

//Icons
import { AiFillEdit } from "react-icons/ai";
import { FaPause, FaPlay } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdFileUpload, MdOutlineFormatTextdirectionLToR } from "react-icons/md";

//Requests
import useSpeechTranslation from "../../features/speech-translate";

//Utils
import { formatTime } from "../../features/utils";

//Languages
import { speechTranslationLanguages } from "../../features/languages";

const Audio = () => {
  const [url, setUrl] = useState(null);
  const [blob, setBlob] = useState(null);
  const [language1, setLanguage1] = useState("en");
  const [language2, setLanguage2] = useState("rw");

  const { isLoading, isSuccess, data } = useSpeechTranslation(
    language1,
    language2,
    blob
  );

  const onDrop = useCallback((acceptedFiles) => {
    const blob = new Blob([acceptedFiles[0]], { type: acceptedFiles[0].type });
    setBlob({
      blob: blob,
      type: acceptedFiles[0].type,
    });

    // load url
    setUrl(URL.createObjectURL(blob));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // Audio
  const wavesRef = useRef(null);

  const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
    container: wavesRef,
    url: url || null,
    waveColor: "#101010",
    progressColor: "#FD6662",
    cursorColor: "#E6E6E6",
    height: 50,
    width: 150,
    normalize: true,
    partialRender: true,
  });

  const tooglePlaying = () => {
    wavesurfer.playPause();
  };

  return (
    <Container>
      <div className="content">
        <div className="tops">
          <SelectBox
            onChange={(e) => {
              setLanguage1(e.target.value);
            }}
            value={language1}
          >
            {speechTranslationLanguages.map((lang, index) => (
              <option key={index} value={lang.value}>
                {lang.name}
              </option>
            ))}
          </SelectBox>
          <div className="tool">
            <MdOutlineFormatTextdirectionLToR />
          </div>
          <SelectBox
            onChange={(e) => {
              setLanguage2(e.target.value);
            }}
            value={language2}
          >
            {speechTranslationLanguages.map((lang, index) => (
              <option key={index} value={lang.value}>
                {lang.name}
              </option>
            ))}
          </SelectBox>
        </div>
        <div className="dropzone">
          {!isSuccess && !isLoading && (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the file here ...</p>
              ) : (
                <div className="initial">
                  <MdFileUpload />
                  <p>
                    Drag and drop or <span>Choose a file</span> to upload
                  </p>
                  <p>Supported Formats: WAV, AU, AIFF, MP3, CSL, SD </p>
                </div>
              )}
            </div>
          )}
          {!isSuccess && isLoading && (
            <div className="loading">
              <img src="/assets/loader.svg" alt="Loader" />
              <p>Transcribing...</p>
            </div>
          )}
          {isSuccess && !isLoading && (
            <div className="text">
              <p>{data?.text}</p>
            </div>
          )}
        </div>
      </div>
      <Player>
        <div className="pause" onClick={tooglePlaying}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </div>
        <div className="sound">
          <p>{formatTime(currentTime)}</p>
          <div className="line" ref={wavesRef} />
          <p>{formatTime(wavesurfer?.getDuration())}</p>
        </div>
      </Player>
    </Container>
  );
};

const Player = styled.div`
  width: auto;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 40px;
  border-radius: 50px;
  background: var(--white);
  border: 1px solid var(--super-gray);
  padding: 0 5px;

  .pause {
    width: 50px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-right: 1px solid var(--super-gray);

    svg {
      font-size: 1.2em;
      color: var(--green);
    }
  }

  .sound {
    width: 300px;
    height: 30px;
    padding: 0 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const SelectBox = styled.select`
  width: 160px;
  height: 40px;
  border-radius: 50px;
  padding: 0 15px;
  border: none;
  margin-left: 10px;
  background: var(--background);

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem top 50%;
  background-size: 0.65rem auto;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .content {
    border-radius: 5px;
    background: var(--white);
    width: calc(1280px - 100px);
    height: calc(100vh - 350px);
    border: 1px solid var(--super-gray);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .tops {
      width: 100%;
      height: 70px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 15px;
      border-bottom: 1px solid var(--super-gray);

      .tool {
        width: 50px;
        height: 50px;
        background: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          font-size: 1.5em;
        }
      }

      .button {
        display: flex;
        padding: 10px 20px;
        border-radius: 50px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;
        cursor: pointer;
        color: var(--black);
        background: var(--background);
      }
    }

    .dropzone {
      width: 100%;
      height: calc(100vh - 350px - 70px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .initial {
        width: auto;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        svg {
          font-size: 6em;
          color: var(--green);
        }

        p {
          font-size: 1em;
          color: var(--black);

          span {
            color: var(--green);
            cursor: pointer;
          }
        }
      }

      .loading {
        width: auto;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: center;

        img {
          width: 40px;
        }

        p {
          color: var(--gray);
        }
      }

      .text {
        width: 100%;
        height: calc(100vh - 350px - 70px);
        padding: 15px;
        overflow-y: scroll;

        p {
          font-size: 0.9em;
          line-height: 25px;
        }
      }
    }
  }
`;

export default Audio;
