import styled from "styled-components";

const Media = {
  Nav: "@media(max-width:1000px)",
};

export const Header = styled.header`
  ${Media.Nav} {
    display: block;
  }
  display: none;
  position: relative;
  width: 90%;
  margin: auto;
  padding-top: 30px;

  .containter {
    width: 100%;
    z-index: 999;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
