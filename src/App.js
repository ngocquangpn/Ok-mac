import React, { Component } from 'react';
import Sidebar from './components/sidebar.js'
import Introduction from './components/introduction.js'
import About from './components/about.js'
import Timeline from './components/timeline.js'
import Comment from './components/comment.js'

class App extends Component {
  render() {
    return (
      
         	
      <div id="colorlib-page">
      <div id="container-wrap">
         <Sidebar></Sidebar>
      <div id="colorlib-main">
        <Introduction></Introduction>
        <Timeline></Timeline>
        <About></About>
        <Comment></Comment>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
