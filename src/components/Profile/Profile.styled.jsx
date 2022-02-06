import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
    text-align: center;
    background-color: #ffffff;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.32), 1px 1px 1px rgba(0, 0, 0, 0.14);
    border-radius: 5px;
    font-weight: 500;
`;

export const Description = styled.div`
    padding: 70px 50px 50px;
    color: #b9b9b9;
`;

export const Avatar = styled.img`
    border-radius: 50%;
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
    padding: 50px;
    border-top: 1px solid #cdcdcd;
    border-right: 1px solid #cdcdcd;
`;

export const Label = styled.span`
    margin-bottom: 20px;
    color: #b9b9b9;
`;

export const Quantity = styled.span`
    font-weight: 700;  
`;