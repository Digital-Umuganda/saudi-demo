import styled from "styled-components";

//Icons
import { AiFillEdit } from "react-icons/ai";
import { PiBookOpenTextFill } from "react-icons/pi";
import { IoMdArrowRoundBack } from "react-icons/io";

//Components
import RecordComponent from "../../components/record";

const Record = () => {
  return (
    <Container>
      <div className="content">
        <div className="rest">
          <PiBookOpenTextFill />
          <p>Record an audio to see the transcription here.</p>
        </div>
        {/* <div className="tops">
          <div className="button">
            <IoMdArrowRoundBack />
            <p>Go back</p>
          </div>
          <div className="button">
            <AiFillEdit />
            <p>Edit</p>
          </div>
        </div> */}
        {/* <div className="text">
          <p>Trying</p>
        </div> */}
      </div>
      <RecordComponent />
    </Container>
  );
};

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
