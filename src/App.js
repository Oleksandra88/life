import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import AppNavigation from './components/AppNavigation';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout style={{ background: 'url(/kotek1.jpg) center / cover' }}>
          <Header transparent title="Linki" style={{ color: 'white' }}>
           <AppNavigation />
          </Header>
          

           <Drawer title="Linki">
           <AppNavigation />
        </Drawer>
        
        <Content><h1> <font color="white"> Hello World! </font></h1> </Content>
        </Layout>




      </div>
    );
  }
}

export default App;
