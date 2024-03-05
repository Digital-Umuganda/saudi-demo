import { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

// Icons
import { AiFillEdit } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineFormatTextdirectionLToR } from "react-icons/md";

// Requests
import useMachineTranslation from "../../features/machine-translate";

// Languages
import { machineTranslationLanguages } from "../../features/languages";

const Text = () => {
  const [text, setText] = useState("");
  const [language1, setLanguage1] = useState("en");
  const [language2, setLanguage2] = useState("kiny");

  const { isLoading, data } = useMachineTranslation(language1, language2, text);

  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    setText(data.text);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <div className="box">
        <div className="tops">
          <p>Your Text</p>
          <SelectBox
            onChange={(e) => {
              setLanguage1(e.target.value);
            }}
            value={language1}
          >
            {machineTranslationLanguages.map((lang, index) => (
              <option key={index} value={lang.value}>
                {lang.name}
              </option>
            ))}
          </SelectBox>
        </div>
        <div className="content">
          <textarea
            name="text"
            id="text"
            cols="30"
            rows="10"
            {...register("text", { required: true })}
            placeholder="Type your text here"
          ></textarea>
        </div>
      </div>
      <button className="tool" type="submit">
        {isLoading ? (
          <img src="/assets/loader.svg" alt="Loader" />
        ) : (
          <MdOutlineFormatTextdirectionLToR />
        )}
      </button>
      <div className="box">
        <div className="tops">
          <p>Generated Text</p>
          <SelectBox
            onChange={(e) => {
              setLanguage2(e.target.value);
            }}
            value={language2}
          >
            {machineTranslationLanguages.map((lang, index) => (
              <option key={index} value={lang.value}>
                {lang.name}
              </option>
            ))}
          </SelectBox>
        </div>
        <div className="content">
          <p>{data}</p>
        </div>
      </div>
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

const Container = styled.form`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 20px;

  .tool {
    width: 50px;
    height: 50px;
    background: var(--white);
    border: 1px solid var(--super-gray);
    border-radius: 50%;
    position: absolute;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
      width: 40px;
    }

    svg {
      font-size: 1.5em;
    }
  }

  .box {
    border-radius: 5px;
    background: var(--white);
    width: calc(1280px / 2 - 50px);
    height: calc(100vh - 150px);
    margin: 0 0 -80px 0;
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

    .content {
      width: 100%;
      height: calc(100vh - 150px - 70px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow-y: scroll;

      p {
        font-size: 0.9em;
        line-height: 25px;
      }

      textarea {
        width: 100%;
        height: 100%;
        border: none;
        padding: 15px;
        font-size: 0.9em;
        resize: none;
        outline: none;
        line-height: 25px;
      }
    }
  }
`;

export default Text;
