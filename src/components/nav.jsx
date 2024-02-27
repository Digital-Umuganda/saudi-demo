import styled from "styled-components";
import { useLocation } from "react-router";

//Icons
import { GoHomeFill } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa";
import { MdTranscribe } from "react-icons/md";
import { PiTranslateBold } from "react-icons/pi";

const Nav = () => {
  const location = useLocation();

  return (
    <Container>
      <div className="content">
        <div className={location.pathname === "/" ? "active" : "link"}>
          <GoHomeFill />
          <p>Home</p>
        </div>
        <div className="link">
          <MdTranscribe />
          <p>Transcribe</p>
          <FaAngleDown />
        </div>
        <div className="link">
          <PiTranslateBold />
          <p>Trannslate</p>
          <FaAngleDown />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .content {
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .link {
      width: auto;
      height: 40px;
      padding: 0 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-radius: 50px;
      justify-content: center;
      margin: 0 10px;
      cursor: pointer;
      transition: all 0.3s ease;
      color: var(--white);

      p {
        margin-left: 5px;
        display: none;
        font-size: 1em;
      }

      &:hover {
        background: #28b652;

        p {
          display: block;
        }
      }
    }

    .active {
      width: auto;
      height: 40px;
      padding: 0 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-radius: 50px;
      justify-content: center;
      margin: 0 10px;
      cursor: pointer;
      transition: all 0.3s ease;
      color: var(--white);
      background: #28b652;

      p {
        margin-left: 5px;
        font-size: 1em;
      }
    }
  }
`;

export default Nav;
