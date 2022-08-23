import styled from "styled-components";
const Media = {
  Laptop: "@media(max-width:1220px)",
  Nav: "@media(max-width:1000px)",
  Tablet: "@media(max-width:1000px)",
};
export const Footerr = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 50px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .options {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;

    ${Media.Tablet} {
      display: none;
    }
  }

  .dowPart {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    .direction {
      p {
        font-family: "Lato";
        font-size: 16px;
        display: flex;
        align-items: center;

        color: #000000;

        /* opacity: 0.67; */
      }
    }
    img {
      display: block;
      margin: auto;
      width: 80px;
      height: 80px;
    }
  }
`;
