import React from 'react';
import { Item, Span, Avatar } from './FriendItem.styled';
import PropTypes from 'prop-types';


function FriendItem({ avatar, name, isOnline }) {
    return (
        <Item>
            <Span style={{ backgroundColor: `${isOnline ? "#70E754" : "#FF3410"}` }}></Span>
            <Avatar src={avatar} alt={name} width="88" height="88"></Avatar>
            <p>{name}</p>
        </Item>
    );
}

FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendItem;