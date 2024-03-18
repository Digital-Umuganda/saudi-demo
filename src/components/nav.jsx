import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

//Icons
import { GoHomeFill } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa";
import { RiTranslate } from "react-icons/ri";
import { MdTranscribe } from "react-icons/md";
import { PiTranslateBold } from "react-icons/pi";

const Nav = () => {
  const location = useLocation();

  return (
    <Container location={location.pathname}>
      <div className="content">
        <Link
          to={"/"}
          className={location.pathname === "/" ? "active" : "link"}
        >
          <GoHomeFill />
          <p>Home</p>
        </Link>
        <div className={location.pathname.includes("tts") ? "active" : "link"}>
          <RiTranslate />
          <p>
            {location.pathname.includes("tts")
              ? `Text-To-Speech: ${
                  location.pathname.split("/")[2].charAt(0).toUpperCase() +
                  location.pathname.split("/")[2].slice(1)
                }`
              : "Text-To-Speech"}
          </p>
          <FaAngleDown />
          <div className="dropdown">
            <Link to={"tts/text"}>Type Text</Link>
            <Link to={"tts/document"}>Upload Document</Link>
          </div>
        </div>
        <div className={location.pathname.includes("stt") ? "active" : "link"}>
          <MdTranscribe />
          <p>
            {location.pathname.includes("stt")
              ? `Speech-To-text: ${
                  location.pathname.split("/")[2].charAt(0).toUpperCase() +
                  location.pathname.split("/")[2].slice(1)
                }`
              : "Speech-To-Text"}
          </p>
          <FaAngleDown />
          <div className="dropdown">
            <Link to={"/stt/audio"}>Upload Audio</Link>
            <Link to={"/stt/record"}>Record Audio</Link>
          </div>
        </div>
        <div
          className={
            location.pathname.includes("translate") ? "active" : "link"
          }
        >
          <PiTranslateBold />
          <p>
            {location.pathname.includes("translate")
              ? `Translate: ${
                  location.pathname.split("/")[2].charAt(0).toUpperCase() +
                  location.pathname.split("/")[2].slice(1)
                }`
              : "Translate"}
          </p>
          <FaAngleDown />
          <div className="dropdown">
            <Link to={"/translate/record"}>Record Audio</Link>
            <Link to={"/translate/audio"}>Upload Audio</Link>
            <Link to={"translate/text"}>Type Text</Link>
            <Link to={"translate/document"}>Upload Document</Link>
          </div>
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
      color: ${(props) =>
        props.location === "/" ? "var(--white)" : "var(--black)"};
      position: relative;
      text-decoration: none;

      svg {
        font-size: 1.3em;
      }

      p {
        margin-left: 5px;
        display: none;
        font-size: 1em;
      }

      &:hover {
        background: #28b652;
        color: var(--white);

        .dropdown {
          display: flex;
        }

        p {
          display: block;
        }
      }

      .dropdown {
        width: 150px;
        height: auto;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 40px;
        left: 0;
        background: var(--white);
        border-radius: 10px;
        z-index: 1000;
        display: none;
        overflow: hidden;

        a {
          text-decoration: none;
          width: 100%;
          height: 45px;
          padding: 0 0 0 20px;
          display: flex;
          flex-direction: row;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: var(--black);
          font-size: 1em;
          margin-left: 0;

          &:hover {
            background: #28b652;
            color: var(--white);
          }
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
      text-decoration: none;
      position: relative;

      p {
        margin-left: 5px;
        font-size: 1em;
      }

      &:hover {
        .dropdown {
          display: flex;
        }
      }

      .dropdown {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 40px;
        left: 0;
        background: var(--white);
        border-radius: 10px;
        z-index: 1000;
        display: none;
        overflow: hidden;

        a {
          text-decoration: none;
          width: 100%;
          height: 45px;
          padding: 0 0 0 20px;
          display: flex;
          flex-direction: row;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: var(--black);
          font-size: 1em;
          margin-left: 0;

          &:hover {
            background: #28b652;
            color: var(--white);
          }
        }
      }
    }
  }
`;

export default Nav;
