import styled from "styled-components";

export const MainLayout = styled.div `
    padding: 5rem;
    @media screen and (max-width: 1000px) {
        padding: 4rem;
    }

    @media screen and (max-width: 650px) {
        padding: 2rem;
    }
`;

export const InnerLayout = styled.div `
    padding: 5rem 0;
    @media screen and (max-width: 1000px) {
        padding: 4rem 0;
    }

    @media screen and (max-width: 650px) {
        padding: 2rem 0;
    }
`;