import styled from "styled-components";

const Media = {
  Nav: "@media(max-width:1000px)",
};

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: auto;
  ${Media.Nav} {
    display: flex;
  }

  .containter {
    z-index: 9999;
    width: 90%;
    margin: auto;
    display: flex;
    top: 0;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
    padding: 15px 0;
  }
  img {
    width: 200px;
  }

  .icons {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`;
