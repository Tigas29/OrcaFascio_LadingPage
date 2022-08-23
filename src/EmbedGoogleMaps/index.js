import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Media = {
  Desktop: "@media(max-width:1189px)",
  Tablet: "@media(max-width:768px)",
  Phone: "@media(max-width:600px)",
  MobileM: "@media(max-width:375px)",
};

const Iframe = styled.div`
  width: 50vw;
  margin: auto;
  ${Media.Phone} {
    width: 100%;
  }
  iframe {
    width: 100%;
  }
`;
const MapsEmbed = ({ embedId }) => (
  <Iframe>
    <iframe
      title="Testando"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.73251255367!2d-46.7511608!3d-23.6497486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce53dec3f7e1a1%3A0x55bf9de00508414d!2sAuto%20T%C3%A9cnica%20Pioneiro!5e0!3m2!1spt-BR!2sbr!4v1660572707107!5m2!1spt-BR!2sbr"
      width="600"
      height="450"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </Iframe>
);

MapsEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default MapsEmbed;
