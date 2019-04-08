import React from 'react';

class Search extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };
  
 // this.onFormSbmit only makes a reference for a method. 
 // If you use parentheses in the end (this.onFormSubmit()), the function will be called when you render the page. 
  
 render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form"> 
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;