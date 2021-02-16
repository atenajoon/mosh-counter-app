import React, { Component } from 'react';

class Counter extends Component {
    // constructor() {
    //     super();

    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }


    state = {
        value: this.props.value
    }

    render() {
        return (
            <div>
                <span className={this.toggleBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={this.handleIncrement}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
            </div>
        );
    }


    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 })
    }

    toggleBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.state;
        return count === 0 ? 'zero' : count;
    }
}

export default Counter;
