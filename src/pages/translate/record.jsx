import styled from "styled-components";
import { Fragment, useState } from "react";

//Icons
import { AiFillEdit } from "react-icons/ai";
import { PiBookOpenTextFill } from "react-icons/pi";
import { IoMdArrowRoundBack } from "react-icons/io";

//Components
import RecordComponent from "../../components/record";

//Languages
import { speechTranslationLanguages } from "../../features/languages";

// Request
import useSpeechTranslation from "../../features/speech-translate";

const Record = () => {
  const [blob, setBlob] = useState(null);
  const [language1, setLanguage1] = useState("en");
  const [language2, setLanguage2] = useState("kiny");

  const { isLoading, isSuccess, data } = useSpeechTranslation(
    language2,
    language1,
    blob
  );

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
        </div>
        {isLoading ? (
          <div className="loading">
            <img src="/assets/loader.svg" alt="Loader" />
            <p>Transcribing...</p>
          </div>
        ) : (
          <div className="rest">
            <PiBookOpenTextFill />
            <p>Record an audio to see the transcription here.</p>
          </div>
        )}
        {isSuccess && (
          <div className="text">
            <p>{data}</p>
          </div>
        )}
      </div>
      <RecordComponent
        language={language2}
        setLanguage={setLanguage2}
        transcribe={setBlob}
        loading={isLoading}
        requestSuccess={isSuccess}
      />
    </Container>
  );
};

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

    .rest {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      color: var(--super-gray);

      p {
        font-size: 1em;
      }

      svg {
        font-size: 4em;
      }
    }

    .tops {
      width: 100%;
      height: 70px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 15px;
      border-bottom: 1px solid var(--super-gray);

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
`;

export default Record;
