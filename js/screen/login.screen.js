import LoginComponent from '../component/login.component';
import React from 'react'
import { observer } from 'mobx-react';
import { CONST } from '../global/constants.global';

@observer
class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: CONST.TITLE_HOME
  };

  render() {
    return (
      <LoginComponent {...this.props}/>
    );
  }
}
export default Login;
