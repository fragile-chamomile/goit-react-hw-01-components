import styled from '@emotion/styled';

export const StatisticsWrapper = styled.section`
    margin-left: 100px;
    padding-top: 40px;
    width: 750px;
    background-color: #ffffff;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;

export const Title = styled.h2`
    margin-bottom: 50px;
    text-transform: uppercase;
    text-align: center;
    font-size: 30px;
`;

export const Stats = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    padding: 30px 0;
    width: 150px;
    color: #ffffff;
`;

export const Label = styled.span`
    margin-bottom: 20px;
    font-size: 30px;
`;
