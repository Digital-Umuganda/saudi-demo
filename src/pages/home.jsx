import React from "react";
import styled from "styled-components";

//Icons
import { LuYoutube } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { IoChevronDownCircleOutline } from "react-icons/io5";

const Home = () => {
  return (
    <Container>
      <div className="hero">
        <p className="heading">
          The Next African{" "}
          <span>
            Language Tool. <div className="line" />{" "}
          </span>
        </p>
        <p className="para">
          Fusce volutpat lectus et nisl consectetur finibus. In vitae
          scelerisque augue, in varius eros. Nunc sapien diam, euismod et
          pretium id, volutpat et tortor.
        </p>
        <div className="about">
          <p>About Us</p>
          <IoChevronDownCircleOutline />
        </div>
      </div>
      <div className="imigongo" />
      <div className="aboutus">
        <div className="logo"></div>
        <div className="info">
          <p>
            DIGITAL UMUGANDA is an Artificial intelligence and common digital
            infrastructure company currently focusing on voice technologies to
            democratize access to information and services hence reducing the
            digital divide gap. This is done by being a platform for
            international commons initiatives such as Common voice linking
            global efforts to local communities and contexts. Digital Umuganda
            projects aligns with the national digital smart master plans with a
            focus on projects with a sustainable development impact.
          </p>
          <div className="buttons">
            <div className="button">
              <p>Learn more</p>
            </div>
            <div className="button">
              <p>Contact us</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Copyright © 2021 DIGITAL UMUGANDA</p>
        <div className="socials">
          <BsTwitterX className="twitter" />
          <FaInstagram className="instagram" />
          <LuYoutube className="youtube" />
          <AiOutlineLinkedin className="linkedin" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 99vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .hero {
    width: 100%;
    height: 900px;
    background: url("/assets/background.png") no-repeat center center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    p.heading {
      font-size: 3.6em;
      font-weight: bold;
      color: var(--white);

      span {
        color: var(--yellow);
        position: relative;

        .line {
          width: 100%;
          height: 4px;
          position: absolute;
          bottom: -10px;
          right: 0;
          border-radius: 50px;
          background: var(--yellow);
        }
      }
    }

    p.para {
      margin-top: 60px;
      text-align: center;
      width: 50%;
      color: var(--white);
      font-size: 1em;
    }

    .about {
      position: absolute;
      bottom: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: var(--white);

      p {
        font-size: 1em;
      }

      svg {
        margin-top: 5px;
        font-size: 1.8em;
      }

      &:hover {
        color: var(--yellow);
      }
    }
  }

  .imigongo {
    width: 100%;
    overflow: hidden;
    height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url("/assets/imigongo.png") center center;
    background-size: contain;
  }

  .aboutus {
    width: 1280px;
    height: 500px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .logo {
      width: 300px;
      height: 300px;
      margin-right: 100px;
      background: url("/assets/logo.png") no-repeat center center;
      background-size: contain;
    }

    .info {
      width: 450px;

      .buttons {
        width: 100%;
        height: 40px;
        display: flex;
        margin-top: 20px;
        flex-direction: row;
        align-items: center;

        .button {
          width: 150px;
          height: 40px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          border-radius: 50px;
          margin-right: 10px;
          cursor: pointer;
          color: var(--black);
          background: var(--yellow);
        }
      }
    }
  }

  .footer {
    width: calc(1280px - 50px);
    height: 100px;
    padding: 0 20px;
    border-top: 1px solid var(--super-gray);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .socials {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      svg {
        color: var(--black);
        margin-left: 20px;
        cursor: pointer;
      }

      .twitter {
        font-size: 1.2em;
      }

      .instagram {
        font-size: 1.4em;
      }

      .youtube {
        font-size: 1.9em;
      }

      .linkedin {
        font-size: 1.5em;
      }
    }
  }
`;

export default Home;
