import React from "react";

const Actions = ({getRepos, getStarred}) => (
  <div className='actions'>
  <button
    onClick={getRepos}
  >
    Ver Repositórios
  </button>
  <button
    onClick={getStarred}
  >Ver favoritos</button>
</div>
)

export default Actions