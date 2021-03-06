import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 5 },
            { id: 2, value: 4 },
            { id: 3, value: 2 }]
    }

    handleDelete = (counterId) => {
        // console.log(counterId)
        const counters = this.state.counters.filter(c => c.id !== counterId)
        this.setState({ counters })
    }
    render() {
        return (
            <div>
                {this.state.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={this.handleDelete}
                        counter={counter}
                    />)}
            </div>
        );
    }
}

export default Counters;