import styled from 'styled-components';

export const StyledButton = styled.button`
    color: white;
    background-color: ${(props: ButtonProps) => props.bgColor};
    padding: 10px;
    border-radius: 50px;
    border: none;
    margin: 10px;
`;

export const StyledImpactSection = styled.section`
    background-color: #055eb8;
    color: white;
`;

export const StyledHeader = styled.header`
    background-color: #eef9fb;
`;

export const StyledFooter = styled.footer`
    background-color: #055eb8;
    height: 200px;
    width: 100%;
    display: flex;
    align-items: center;
    color: white;
    font-size: 20px;
    font-weight: 100;
    font-family: 'Monsterat', sans-serif;
`;



interface ButtonProps {
    bgColor: string;
}
