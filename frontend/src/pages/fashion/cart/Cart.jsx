// import React, { Fragment } from "react";

// import styled from "styled-components";
// import { media, Solid } from "../../variables";
// import { H2 } from "../../atoms/Text";
// import BreadCrumb from "../../organisms/Fashion/BreadCrumb";
// import CartTable from "../../organisms/Fashion/Cart/CartTable";
// import { cartProducts } from "../../data/productsItems";
// import Note from "../../molecules/fashion/Note";
// import GrandTotal from "../../molecules/fashion/GrandTotal";
// import EnterDiscount from "../../molecules/fashion/EnterDiscount";

// function Cart() {
//   return (
//     <Fragment>
//       <BreadCrumb current="Cart" />
//       <Wrapper>
//         <Container>
//           <Header>Shopping Cart</Header>
//           <ContentWrapper>
//             <LeftBox>
//               <CartTable products={cartProducts} />
//               <EnterDiscount />
//             </LeftBox>
//             <RightBox>
//               <Note />
//               <GrandTotal />
//             </RightBox>
//           </ContentWrapper>
//         </Container>
//       </Wrapper>
//     </Fragment>
//   );
// }

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// const Container = styled.div`
//   width: 70%;
//   margin: 5rem 0rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   @media screen and ${media.tablet}, ${media.desktop} {
//     width: 85%;
//   }
// `;

// const Header = styled(H2)`
//   color: ${Solid.SECONDARY};
// `;

// const ContentWrapper = styled.div`
//   display: flex;
//   width: 100%;
//   margin-top: 5rem;
//   justify-content: space-between;
// `;

// const RightBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   height: 65rem;
//   width: 30%;

//   @media screen and ${media.desktop} {
//     height: 55rem;
//   }

//   @media screen and ${media.tablet} {
//     height: 50rem;
//   }
// `;

// const LeftBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 68%;
// `;

// export default Cart;
