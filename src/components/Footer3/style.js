import styled from "styled-components";
const Media = {
  Laptop: "@media(max-width:1220px)",
  Nav: "@media(max-width:1000px)",
  Tablet: "@media(max-width:1000px)",
  PhoneLarge: "@media(max-width:600px)",
};

export const Footerr = styled.div`
  width: 70%;
  max-width: 1600px;
  display: flex;
  margin: auto;
  gap: 32px;
  flex-direction: column;
  .talkToSeller {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    a {
      font-family: "Lato";
      font-size: 25px;
      display: flex;
      margin: auto;
      align-items: center;
      text-align: center;
      color: #ffffff;
      ${Media.Laptop} {
        font-size: 20px;
      }
      ${Media.Tablet} {
        font-size: 17px;
      }
      ${Media.PhoneLarge} {
        font-size: 15px;
      }
    }
  }
  .rowPart {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 80%;
    ${Media.Tablet} {
      width: 95%;
      gap: 32px;
      flex-direction: column;
    }
    .icon {
      color: #fff;
      width: 3vw;
      height: 3vh;
      ${Media.PhoneLarge} {
        margin-left: 2vw;
        color: #fff;
        width: 10vw;
        height: 10vh;
      }
    }
  }

  .direction {
    color: white;
    text-align: center;
    margin: auto;
  }
`;
