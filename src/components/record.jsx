import { ReactMic } from "react-mic";
import styled from "styled-components";
import { useRef, useState } from "react";
import { useWavesurfer } from "@wavesurfer/react";

//Icons
import { FaStop } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RiMicFill } from "react-icons/ri";
import { VscLoading } from "react-icons/vsc";
import { BsFillSendArrowUpFill } from "react-icons/bs";

const RecordComponent = () => {
  const [isRecording, setIsRecording] = useState(false);

  // Audio
  const wavesRef = useRef(null);

  const { wavesurfer } = useWavesurfer({
    container: wavesRef,
    url: null,
    waveColor: "#101010",
    progressColor: "#FD6662",
    cursorColor: "#E6E6E6",
    height: 50,
  });

  const tooglePlaying = () => {
    wavesurfer.playPause();
  };

  const onStop = (recordedBlob) => {};

  const startRecording = () => {
    setIsRecording(true);
  };

  return (
    <Container>
      <div className="controlls">
        {/* <div className="mic">
          <RiMicFill />
        </div> */}
        {/* <div className="recording">
          <div className="timer">
            <p>00:00</p>
          </div>
          <ReactMic
            record={isRecording}
            className="sound"
            onStop={onStop}
            strokeColor="#2E2E2E"
            backgroundColor="#FFFFFF"
          />
          <div className="stop" onClick={startRecording}>
            <FaStop />
          </div>
        </div> */}
        {/* <div className="record">
          <div className="pause">
            <FaPause />
          </div>
          <div className="sound">
            <p>00:00</p>
            <div className="line" ref={wavesRef} />
            <p>00:00</p>
          </div>
          <div className="send">
            <BsFillSendArrowUpFill />
            <img src="/assets/loader.svg" alt="Loader" />
          </div>
          <div className="close">
            <IoClose />
          </div>
        </div> */}
        <div className="record">
          <div className="pause">
            <FaPause />
          </div>
          <div className="sound">
            <p>00:00</p>
            <div className="line" ref={wavesRef} />
            <p>00:00</p>
          </div>
        </div>
      </div>
      <SelectBox>
        <option value="Kinyarwanda">Kinyarwanda</option>
        <option value="English">English</option>
      </SelectBox>
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

  .mic {
    width: 50px;
    height: 30px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-right: 1px solid var(--super-gray);

    svg {
      font-size: 1.5em;
      color: var(--green);
    }
  }

  .recording {
    width: auto;
    height: 30px;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    align-items: center;

    .timer {
      width: 60px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid var(--super-gray);
    }

    .sound {
      width: 250px;
      height: 30px;
      padding: 0 10px;
      border-right: 1px solid var(--super-gray);
    }

    .stop {
      width: 50px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-right: 1px solid var(--super-gray);

      svg {
        font-size: 1.5em;
        color: var(--red);
      }
    }
  }

  .record {
    width: auto;
    height: 30%;
    display: flex;
    flex-direction: row;
    align-items: center;

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
      border-right: 1px solid var(--super-gray);
    }

    .send {
      width: 50px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-right: 1px solid var(--super-gray);

      svg {
        font-size: 1.2em;
        color: var(--yellow);
      }

      img {
        width: 3em;
      }
    }

    .close {
      width: 50px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-right: 1px solid var(--super-gray);

      svg {
        font-size: 1.5em;
        color: var(--red);
      }
    }
  }
`;

export default RecordComponent;
