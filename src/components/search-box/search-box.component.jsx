import { Component } from "react";

class SearchBox extends Component{
    render() {

        return(
        <input
                type="search"
                className="search-box"
                placeholder={this.props.holder}
                onChange={this.props.onChangeHandler}
        />
        )}
}

export default SearchBox;