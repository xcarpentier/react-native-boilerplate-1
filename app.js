'use strict';

const React = require('react-native');
const SideMenu = require('react-native-side-menu');
const Menu = require('./components/Menu');
const Button = require('./components/Button');

const Dashboard = require('./components/Dashboard');
const Calendar = require('./components/Calendar');

const Home = require('./components/Home');

const {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Component
} = React;

const { Router, Route, Schema, Animations, TabBar } = require('react-native-router-flux');

const styles = StyleSheet.create({
   button: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#CCC',
    borderRadius: 5,
    padding: 15
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
});

Button.contextTypes = {
  menuActions: React.PropTypes.object.isRequired
};


class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}




class myWO extends Component {
  constructor(props, ctx) {
    super(props, ctx);

    this.state = {
      touchToClose: false,
    };
  }

  handleChange(isOpen) {
    if (!isOpen) {
      this.setState({
        touchToClose: false,
      });
    }
  }

  render() {
    return (

      <SideMenu
        menu={<Menu/>}
        touchToClose={this.state.touchToClose}
        onChange={this.handleChange.bind(this)}>

        <Router hideNavBar={true}>
          <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
          <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>

          <Route name="dashboard" component={Dashboard} initial={true} wrapRouter={true} title="Dashboard" hideNavBar={true}/>
          <Route name="calendar" component={Calendar} title="Calendar"/>

        </Router>

        <Button style={styles.button}>
          Menu
        </Button>
      </SideMenu>

    );
  }
}

AppRegistry.registerComponent('myWO', () => myWO);