import React from 'react';
import styled from "styled-components"

const FooterArea = styled.div`
  height: 200px;
  background-color: #2c2d38;
  color: white;
`;

const FooterLink = styled.link`
  font-family: 'Lato', sans-serif;
`;

const Footer = () => {
    return (
        <>
            <FooterArea>
                This is footer area
            </FooterArea>
        </>
    );
};

export default Footer;