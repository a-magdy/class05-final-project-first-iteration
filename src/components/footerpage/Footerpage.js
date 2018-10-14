import React from 'react';
import "./Footerpage.css";
 
class Footerpage extends React.Component{
    render(){
        return(
            <footer className="top-f">
                  <div className="footer"> 
                  <div className="thread">
                    <h4>
                      <a href="#thread">Thread</a>
                    </h4>
                    <p><a href="#!">About</a></p>
                            <p><a href="#!">Mission</a></p>
                            <p><a href="#!">Partners</a></p>
                            <p><a href="#!">Contact</a></p>
                    </div>
                    <div className="company">
                    <h4>
                      <a href="#company">Company</a>
                    </h4>
                    <p><a href="#!">About</a></p>
                            <p><a href="#!">Mission</a></p>
                            <p><a href="#!">Partners</a></p>
                            <p><a href="#!">Contact</a></p>
                    </div>
                    <div className="links">
                    <h4>
                      <a href="#useful-links">Useful links</a>
                    </h4>
                    <p><a href="#!">Your Account</a></p>
                            <p><a href="#!">Become an Affiliate</a></p>
                            <p><a href="#!">Want to donate?</a></p>
                            <p><a href="#!">Help</a></p>
                    </div>
                    <div className="contact">
                    <h4>
                      <a href="#contacts">Contacts</a>
                    </h4>
                    <p><i className="fa fa-home mr-3"></i> Copenhagen, Denmark</p>
                            <p><i className="fa fa-envelope mr-3"></i> info@gmail.com</p>
                            <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                            <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
                    </div>
                    <div className="website">
                    <h4>
                      <a href="#website">Websites</a>
                    </h4>
                    <p><i className="fa fa-home mr-3"></i> Copenhagen, Denmark</p>
                    <p><a href="#!">dynamic website</a></p>
                    <p><a href="#!">resources</a></p>
                    <p><a href="#!">references</a></p>
                    <p><a href="#!">Help</a></p>
                    </div>
                  </div> 
            
            </footer>
        )
    }
}
export default Footerpage;