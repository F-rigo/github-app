import React from "react";
import PropTypes from 'prop-types';

const UserInfo = ({userinfo}) => (
  <div className='user-info'>
    <img src={userinfo.photo} alt="" />
    <h1> 
      <a href={`https://github.com/${userinfo.login}`} target="_blank" rel="noopener noreferrer"> {userinfo.username}</a>
    </h1>
    <ul>
      <li>Repositórios:{userinfo.repos}</li>
      <li>Seguidores: {userinfo.followers}</li>
      <li>Seguindo: {userinfo.following}</li>
    </ul>
  </div>
)
UserInfo.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}

export  default UserInfo