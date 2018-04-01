import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.props.dispatch(userActions.logout())

        this.state = {
            username: '',
            password: '',
            submitted: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(event) {
        const { dispatch } = this.props;
        const { username, password } = this.state;
        this.setState({
            submitted: true
        })

        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const style = {
            width: '30%'
        }

        const buttonMargin = {
            marginRight: '1%'
        }

        const { submitted, username, password } = this.state;
        return (
            <div>
                <h1 className='col-md-12'>Login</h1>
                <form style={style}>
                    <div className="form-group col-md-12">
                        <label>Username : </label>
                        <input className="form-control" name="username" onChange={this.handleChange} />
                        {submitted && !username
                            ? <div className="help-block">Username is required</div>
                            : ''
                        }
                    </div>
                    <div className="form-group col-md-12">
                        <label>Password : </label>
                        <input className="form-control" type="password" name="password" onChange={this.handleChange} />
                        {submitted && !password
                            ? <div className="help-block">Password is required</div>
                            : ''
                        }
                    </div>
                </form>
                <div className='col-md-12'>
                    <button className='btn btn-primary' onClick={this.handleClick} style={buttonMargin} >Login</button>
                    <Link className='btn btn-primary' to="/register">Register</Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };
