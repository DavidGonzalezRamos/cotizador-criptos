import React from "react";
import styled from "@emotion/styled";

const Parrafo = styled.div`
  color: #fff;
  font-family: "Lato";
  text-align: center;
  background-color: red;
  padding: 10px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
`;
const Error = ({ children }) => {
  return (
    <>
      <Parrafo>{children}</Parrafo>
    </>
  );
};

export default Error;
