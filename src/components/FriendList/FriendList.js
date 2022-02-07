import React from 'react';
import { List } from './FriendList.styled';
import PropTypes from 'prop-types';
import FriendItem from '../FriendItem/FriendItem';


function FriendList({friends}) {
    return (
        <List> {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendItem key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            ))}
        </List>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;