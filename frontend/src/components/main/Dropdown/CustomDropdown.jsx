import React, { useState } from "react";
import styled from "styled-components";

import AnimatedArrow from "./AnimatedArrow";
import { MediumSubHeading } from "../../others/Text";
import { type } from "../../../utils";

function CustomDropdown({ title, items, children }) {
  const [isActive, setIsActive] = useState(true);

  const onActiveHandler = (value) => {
    setIsActive(value);
  };

  return (
    <Wrapper>
      <ContentWraper>
        <Title>{title}</Title>
        <AnimatedArrow onActiveHandler={onActiveHandler} />
      </ContentWraper>
      <ItemsWrapper isActive={isActive}>{children}</ItemsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

const ContentWraper = styled.div`
  display: flex;
`;

const Title = styled(MediumSubHeading)`
  color: #333333;
  font-weight: bold;
  font-size: 2.3rem;
  font-family: ${type.OSWALD};
  margin-right: 6rem;
`;

const ItemsWrapper = styled.div`
  display: ${({ isActive }) => (isActive ? "block" : "none")};
  margin-top: 3rem;
`;

export default CustomDropdown;
