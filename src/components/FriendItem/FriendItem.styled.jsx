import styled from '@emotion/styled';


export const Item = styled.li`
    width: 400px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 10px;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    &:last-child {
        margin-bottom: 0;
    }
`;

export const Span = styled.span`
    margin-right: 10px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
`;

export const Avatar = styled.img`
    margin-right: 15px;
`;
