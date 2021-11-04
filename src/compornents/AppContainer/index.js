import React from "react";
import PropTypes from "prop-types";

import Search from "../Search";
import UserInfo from "../UserInfo";
import Actions  from "../Actions";
import Repos from "../Repos";


const AppContent = ({
  userinfo, 
  repos, 
  starred, 
  isFetching,
  handleSearch, 
  getRepos, 
  getStarred
}) => (
  <div className="app">
  <Search isDisabled={isFetching} handleSearch={handleSearch}/>
  {isFetching ? <div className="loader">Loading...</div> : null}
  {!!userinfo && <UserInfo userinfo={userinfo}/>}
  {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred}/>}

  {!!repos.length &&
  <Repos 
    className="repos" 
    title="Repositórios" 
    repos={repos} 
  />
  }
  {!!starred.length &&
  <Repos 
    className="starred" 
    title="Favoritos:" 
    repos={starred} 
  />
  }
  </div>
);

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired 
};


export default AppContent;



