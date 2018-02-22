import React, { Component } from 'react';
import Account from './Account';
import axios from 'axios';
import { connect } from 'react-redux';

class AccountContainer extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      message:'',
      loading: false,
    }
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios.get('/api/user-data').then(res => {
      this.setState({ user: res.data.user,loading:false });
    }).catch(error => this.setState({message:"You are unauthorized",loading:false}))
  }
  render() {
    const { loading, message } = this.state;
    const { user } = this.props;

    return (
      <div className="account-container">
        {loading && <div>Loading...</div>}
        {user &&
            <Account
            id={user.auth0_sub}
            name={user.name}
            email={user.email}
            picture={user.picture}
            amount={Math.floor(100 + Math.random() * 100)} />
        }
        {message && <div>{message}</div>}
          </div>);
      }
}

const mapStateToProps = state => {
  return {
    user:state.user,
  }
}

export default connect(mapStateToProps)(AccountContainer)