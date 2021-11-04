import React, { Component } from "react";
import ajax from '@fdaciuk/ajax'


import AppContent from "./compornents/AppContainer";

class App extends Component {
    constructor() {
        super();
        this.state = {  
          userinfo: null,
          repos: [],
          starred: [],
          isFetching: false,
    }}
  getGitHubApi(username, type) {
    const internalUser = username ? `/${username}` : '';
    const internalType = type ? `/${type}` : '';
  
      return `https://api.github.com/users${internalUser}${internalType}`
    }

  handleSearch = (e) => { 
    const value = e.target.value;
    const keyCode = e.keyCode || e.which;
    const ENTER = 13;

    if(keyCode === ENTER) {
      this.setState({
        isFetching: true,
      })

      ajax().get(this.getGitHubApi(value))
        .then(result => {
          this.setState({
            userinfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following,
            },
            repos: [],
            starred: [],
          })
        })
        .catch(err => {
          console.log(err)
        })
        .always(() => this.setState({ isFetching: false }))
    }
}
  

   getRepos = (type) => {
    return(e) => {
      const username = this.state.userinfo.login;
      ajax().get(this.getGitHubApi(username, type))
        .then((result) => {
          this.setState({
            [type]: result.map((repo) => ({ 
                  name: repo.name,
                  link: repo.html_url,
            }))
          })
        })
        .catch(err => {
          console.log(err)
        }
      )
    }
  }



  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
      isFetching={this.state.isFetching}
      handleSearch={(e) => this.handleSearch(e)}
      getRepos={this.getRepos('repos')}
      getStarred={this.getRepos('starred')}
    />
  }
}
export default App;
