import styled from "styled-components";

const Media = {
  Laptop: "@media(max-width:1220px)",
  Nav: "@media(max-width:1024px)",
};

export const Container = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ${Media.Nav} {
    display: none;
  }
  header {
    z-index: 9999;
    width: 90%;
    margin: auto;
    display: flex;
    top: 0;
    position: fixed;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    background: #ffffff;
    box-shadow: 8.66007px 3.60836px 72.1672px rgba(0, 0, 0, 0.18);
    border-radius: 14px;
    margin-top: 40px;
    padding: 15px 0;

    p {
      font-size: 17px;
      ${Media.Laptop} {
        font-size: 15px;
      }
      font-family: "Lato";
      text-align: center;
      color: #312e2e;
      font-weight: 400;
      cursor: pointer;
    }

    hr {
      visibility: hidden;
    }

    .left {
      display: flex;
      align-items: center;
      gap: 80px;
    }
    .right {
      display: flex;
      align-items: center;
      gap: 80px;
    }

    .logo {
      width: 15vw;

      max-width: 250px;
    }
    .LinkContent {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .active {
      visibility: visible;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;

      bottom: 0;
      width: 3%;
      border: none;
      border: 1px solid #03608d;
    }
  }
`;
