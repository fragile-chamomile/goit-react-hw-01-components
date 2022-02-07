import styled from '@emotion/styled';

export const Table = styled.table`
    margin: 0 0 0 100px;
    background-color: #ffffff;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;

export const TableHead = styled.thead`
    color: #ffffff;
    background-color: #13d6f6;
`;

export const TableHeader = styled.th`
    width: 400px;
    padding: 50px;
    text-transform: uppercase;
    border-right: 1px solid #98d2dc;
    &:last-child {
        border-right: none ;
    }
`;

export const TableColumn = styled.td`
    width: 400px;
    padding: 50px;
    border-right: 1px solid #98d2dc;
    &:last-child {
        border-right: none ;
    };
`;

export const TableRow = styled.tr`
    text-align: center;
    color: #828282;
    :nth-of-type(even) {
        background-color: #d7f6fB;
    };
`;