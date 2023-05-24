import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Header = styled.header`
  max-width: 100%;
  padding: 16px;
  margin-bottom: 32px;

  background-color: #ccc;
`;

export const HeaderLink = styled(Link)`
  margin-right: 16px;
`;
