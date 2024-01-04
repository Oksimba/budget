import styled from "styled-components";

export const Nav = styled.nav`
    ul {
        display: flex;
        list-style: none;
        padding: 5px;

        li {
            margin-right: 25px;
        }
    }
`;

Nav.displayName = 'Nav';