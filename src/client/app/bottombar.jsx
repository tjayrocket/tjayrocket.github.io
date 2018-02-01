import React from 'react';

class BottomBar extends React.Component {

  constructor(props){
    super(props);
  };

  render() {
    return (
      <div id="bottom-bar">
        <div id="info">
            <p id="resume"><a href="https://tjayrocket.github.io/TJay-Hanschen-Resume/" target="_blank">Resume</a> and <a href="https://tjayrocket.github.io/tjay-hanschen-portfolio/" target="_blank">Portfolio</a></p>
        </div>
        <nav className="main-nav">
            <div id="nav-div">
             <ul id="links">
               <li><a href="https://www.facebook.com/tjayrocket" target="_blank" className="icon-facebook2"> </a></li>
               <li><a href="https://twitter.com/tjayrocket" target="_blank" className="icon-twitter"> </a></li>
               <li><a href="https://github.com/tjayrocket" target="_blank" className="icon-github"> </a></li>
               <li><a href="https://www.linkedin.com/in/tjayrocket/" target="_blank" className="icon-linkedin"> </a></li>
               <li><a href="https://www.twitch.tv/tjayrocket" target="_blank" className="icon-twitch"> </a></li>
               <li><a href="https://www.reverbnation.com/tjayrocket" target="_blank" className="icon-star-full"> </a></li>
             </ul>
           </div>
         </nav>
      </div>
    );
  }

}

export default BottomBar;