import styled from "styled-components";
import { Solid, media, type } from "../../utils";

export const H1 = styled.h1`
  font-size: 9rem;
  font-weight: 100;
  text-transform: uppercase;
  color: white;
  font-family: ${type.OSWALD};

  @media screen and ${media.desktop} {
    font-size: 7rem;
  }

  @media screen and ${media.tablet} {
    font-size: 6rem;
  }

  @media screen and ${media.mobile} {
    font-size: 6.4rem;
  }

  @media screen and ${media.xsMobile} {
    font-size: 4.8rem;
  }
`;

export const H2 = styled.h2`
  font-size: 4.2rem;
  color: white;
  font-family: ${type.OSWALD};

  @media screen and ${media.desktop} {
    font-size: 3rem;
  }

  @media screen and ${media.tablet} {
    font-size: 2rem;
  }

  @media screen and ${media.mobile} {
    font-size: 2.5rem;
  }

  @media screen and ${media.xsMobile} {
    font-size: 2.5rem;
  }
`;

export const H3 = styled.h3`
  font-size: 3.6rem;
  color: white;
  font-family: ${type.OSWALD};

  @media screen and ${media.desktop} {
    font-size: 2.8rem;
  }

  @media screen and ${media.tablet} {
    font-size: 2.5rem;
  }

  @media screen and ${media.mobile} {
    font-size: 30px;
  }

  @media screen and ${media.xsMobile} {
    font-size: 30px;
  }
`;

export const H4 = styled.h4`
  font-size: 30px;
  font-weight: 500;
  font-family: ${type.OSWALD};

  @media screen and ${media.tablet} {
    font-size: 25px;
    font-weight: 500;
  }

  @media screen and ${media.mobile} {
    font-size: 20px;
    font-weight: 400;
  }

  @media screen and ${media.xsMobile} {
    font-size: 18px;
    font-weight: 400;
  }
`;

export const H5 = styled.h5`
  font-size: 2.8rem;
  font-weight: 500;
  font-family: ${type.OSWALD};

  @media screen and ${media.tablet} {
    font-size: 2.3rem;
    font-weight: 500;
  }

  @media screen and ${media.mobile} {
    font-size: 18px;
    font-weight: 400;
  }

  @media screen and ${media.xsMobile} {
    font-size: 18px;
    font-weight: 400;
  }
`;

export const H6 = styled.h6`
  color: ${Solid.GREY_LIGHT};
  font-size: 2rem;
  font-family: ${type.OSWALD};
  font-weight: 600;

  @media screen and ${media.desktop} {
    font-size: 1.6rem;
  }

  @media screen and ${media.tablet} {
    font-size: 1.4rem;
  }

  @media screen and ${media.mobile} {
    font-size: 1rem;
  }

  @media screen and ${media.xsMobile} {
    font-size: 1rem;
  }
`;

export const SubHeading = styled.p`
  font-size: 2rem;
  color: ${Solid.SECONDARY_LIGHT};
  font-family: ${type.RUBIK};
  font-weight: 400;

  @media screen and ${media.desktop} {
    font-size: 1.5rem;
  }

  @media screen and ${media.tablet} {
    font-size: 1rem;
  }

  @media screen and ${media.mobile}, ${media.xsMobile} {
    font-size: 1.5rem;
  }
`;

export const MediumSubHeading = styled.p`
  font-size: 1.8rem;
  color: ${Solid.GREY};
  font-family: ${type.RUBIK};

  @media screen and ${media.desktop} {
    font-size: 1.4rem;
  }

  @media screen and ${media.tablet} {
    font-size: 1.3rem;
  }

  @media screen and ${media.mobile} {
    font-size: 1rem;
  }

  @media screen and ${media.xsMobile} {
    font-size: 1rem;
  }
`;

export const SmallSubHeading = styled.p`
  font-size: 1.6rem;
  color: ${Solid.GREY};
  font-family: ${type.RUBIK};

  @media screen and ${media.desktop} {
    font-size: 1.3rem;
  }

  @media screen and ${media.tablet} {
    font-size: 1.1rem;
  }

  @media screen and ${media.mobile} {
    font-size: 1rem;
  }

  @media screen and ${media.xsMobile} {
    font-size: 0.8rem;
  }
`;
