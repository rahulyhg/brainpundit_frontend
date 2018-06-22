import React, { Component } from 'react';
import '../components/searchPlace.css';

class SearchPlace extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ""};
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        const state = this.state;
        this.setState({text : e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        const text = this.state.text.replace(/\s/g,"%20");
        this.props.onTextSubmit(text);
    };



    render() {
        const {text} = this.state;
        return (
            <div className="Search_Form">
                <form onSubmit={this.onSubmit}>
                    <input value={text} name="text" placeholder="Enter Place" onChange={this.onChange} className="Search_Bar"/>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        )
    }
}

export default SearchPlace;
