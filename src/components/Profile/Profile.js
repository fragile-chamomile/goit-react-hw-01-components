import React from 'react';
import { ProfileWrapper, Description, Avatar, Name, Stats, StatsItem, Label, Quantity } from './Profile.styled';
import PropTypes from 'prop-types';


function Profile({ username, tag, location, avatar, stats }) {
    return (
        <ProfileWrapper>
            <Description>
                <Avatar src={avatar} alt="User avatar"></Avatar>
                <Name>{username}</Name>
                <p>{tag}</p>
                <p>{location}</p>
            </Description>

            <Stats>
                <StatsItem>
                <Label>Followers</Label>
                <Quantity>{stats.followers}</Quantity>
                </StatsItem>
                <StatsItem>
                <Label>Views</Label>
                <Quantity>{stats.views}</Quantity>
                </StatsItem>
                <StatsItem>
                <Label>Likes</Label>
                <Quantity>{stats.likes}</Quantity>
                </StatsItem>
            </Stats>
        </ProfileWrapper>
    );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        })),
    
}


export default Profile;