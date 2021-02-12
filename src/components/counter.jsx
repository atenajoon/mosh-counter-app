import React, { Component } from 'react';

class Counter extends Component {
    // constructor() {
    //     super();

    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }


    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    }

    render() {
        return (
            <React.Fragment>
                <span className={this.toggleBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                {this.renderTags()}
            </React.Fragment>

        );
    }

    // handleIncrement() {
    //     console.log("this", this);
    // }


    handleIncrement = () => {
        console.log("this", this);
    }

    renderTags() {
        return this.state.tags.length === 0 ? <p>There are no tags!</p> : <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    toggleBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'zero' : count;
    }
}

export default Counter;
