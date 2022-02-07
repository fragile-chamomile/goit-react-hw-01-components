import React from 'react';
import {StatisticsWrapper, Title, Item, Stats, Label } from './Statistics.styled';
import PropTypes from 'prop-types';


function Statistics({title, stats}) {
    return (
        <StatisticsWrapper>
            <Title>{title}</Title>

            <Stats>
                {stats.map(({id, label, percentage}) =>
                    <Item style={{backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`}} key={id}> 
                        <Label>{label}</Label>
                        <span>{percentage}%</span>
                    </Item>
                )}                 
            </Stats>
        </StatisticsWrapper>
    );
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })),
    title: PropTypes.string.isRequired,
}


export default Statistics;

