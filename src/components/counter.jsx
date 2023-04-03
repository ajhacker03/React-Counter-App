import React, { Component } from 'react';

class Counter extends Component {

    render() {
        return (
            <div className='row'>
                <div className="col-1">
                    <span className={this.getBadgeColors()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                    <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">+</button>
                    <button disabled={!this.props.counter.value} onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">-</button>
                    <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
                </div>
            </div>
        );
    }

    getBadgeColors() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;