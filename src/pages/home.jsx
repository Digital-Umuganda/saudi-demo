import React from "react";
import styled from "styled-components";

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
        <div className="buttons">
          <a
            href="https://digitalumuganda.com"
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            <p>Learn more</p>
          </a>
          <a
            href="https://digitalumuganda.com/contact/"
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            <p>Contact us</p>
          </a>
        </div>
      </div>
      <div className="imigongo" />
    </Container>
  );
};

const Container = styled.div`
  width: 99vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .hero {
    width: 100%;
    height: 100%;
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
      text-decoration: none;

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

    .buttons {
      width: 100%;
      height: 40px;
      display: flex;
      margin-top: 20px;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      .button {
        width: 150px;
        height: 40px;
        display: flex;
        flex-direction: row;
        text-decoration: none;
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
`;

export default Home;
