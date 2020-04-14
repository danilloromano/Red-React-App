import React, { Component } from 'react';
import './Search.scss';
import { IoIosSearch } from "react-icons/io";

class Search extends Component {

  render() {
    return (
      <div className="search__wrapper">
        <input className="search__input" type="text" />
        <button className="search__default" onClick={this.props.handleClick}>

          <IoIosSearch />
        </button>
      </div>
    )
  }
}

export default Search;
