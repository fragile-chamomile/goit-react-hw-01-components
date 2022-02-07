import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
    text-align: center;
    background-color: #ffffff;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    border-radius: 5px;
    font-weight: 500;
`;

export const Description = styled.div`
    padding: 70px 50px 50px;
    color: #b9b9b9;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    width: 300px;
`;

export const Name = styled.p`
    margin-bottom: 0;
    font-weight: 700;
    font-size: 50px;
    color: #000000;
`;

export const Stats = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    
    background-color: #f5f4f6;
    list-style: none;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    width: 180px;
    padding: 30px;
    border-top: 1px solid #cdcdcd;
    border-right: 1px solid #cdcdcd;
    &:last-child {
        border-right: none ;
    }
`;

export const Label = styled.span`
    margin-bottom: 20px;
    color: #b9b9b9;
`;

export const Quantity = styled.span`
    font-weight: 700;  
`;