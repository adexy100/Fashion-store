import React from "react";
import styled from "styled-components";

import facebook from "../../../images/facebook (7).svg";
import instagram from "../../../images/instagram (4).svg";
import linkedin from "../../../images/linkedin (2).svg";
import twitter from "../../../images/twitter (5).svg";

function SocialIcons() {
  return (
    <Container>
      <Icon src={facebook} />
      <Icon src={instagram} />
      <Icon src={linkedin} />
      <Icon src={twitter} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
`;

const Icon = styled.img`
  width: 23%;
`;

export default SocialIcons;
