import React from 'react';
import { connect } from 'react-redux';

class HomePage extends React.Component {
    render() {
        return (
            <div>Home Page</div>
        )
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
