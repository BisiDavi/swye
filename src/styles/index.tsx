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
    p {
        color: white;
    }
    h3 {
        width: fit-content;
        margin: auto;
    }

    .features {
        margin: 20px;
        width: 300px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
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

export const Divider = styled.hr`
    border: 1px solid #48ac15;
    width: 150px;
`;

export const ArticleSection = styled.section`
    span {
        color: #48ac15;
    }
    h6 {
        color: #055eb8;
        font: normal bold 24px/28px sans-serif;
    }
    p {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 400;
        line-height: 44px;
        letter-spacing: 0em;
    }
`;

interface ButtonProps {
    bgColor: string;
}
