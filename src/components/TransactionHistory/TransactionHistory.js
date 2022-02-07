import React from 'react';
import {Table, TableHead, TableHeader, TableColumn, TableRow} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

function TransactionHistory({ items }) {
    return (
        <Table>
            <TableHead>
                <tr>
                    <TableHeader>Type</TableHeader>
                    <TableHeader>Amount</TableHeader>
                    <TableHeader>Currency</TableHeader>
                </tr>
            </TableHead>

            <tbody>
                {items.map(({id, type, amount, currency}) =>
                    <TableRow key={id}>
                        <TableColumn>{type[0].toUpperCase() + type.substring(1).toLowerCase()}</TableColumn>
                        <TableColumn>{amount}</TableColumn>
                        <TableColumn>{currency}</TableColumn>
                    </TableRow>
                )}
            </tbody>
        </Table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }))
}

export default TransactionHistory;
