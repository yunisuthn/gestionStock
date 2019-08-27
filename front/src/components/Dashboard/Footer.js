import React from 'react';

import API from "../../utils/API";
class Footer extends React.Component {

  disconnect = () => {
    API.logout();
    window.location = "/";
  };
    render() {
        return (
            <div class="Footer">
              <div class="Footer-inner">
                <a href="/" class="rss-tag-icon" title="RSS"></a>
                  <div class="Footer-text">
                    <p>
                      © 2019 Copyright:
                      RAZANAKINIAINA Onisoa Tahina.<br />
                      <a  onClick={this.disconnect} href="">Deconnecter</a> 
                       {/* <a href="#">Terms of Use</a> | <a href="#">Trademarks</a>
                            | <a href="#">Privacy Statement</a> */}
                    </p>
                  </div>
              </div>
              <div class="Footer-background">
              {/* <button onClick={this.disconnect}  type="submit" className="btn btn-primary">
                  Se déconnecter
              </button> */}
              </div>
            </div>
        );
    }
}

export default Footer;

/* import React from 'react';

import API from "../../utils/API";
class Footer extends React.Component {

    disconnect = () => {
        API.logout();
        window.location = "/";
      };
    render() {
        return (
          <footer className=" mx-auto mt-5 page-footer font-small  darken-3">
            <div className="footer-copyright text-center py-3">© 2019 Copyright:
              <a href=""> RAZANAKINIAINA Onisoa Tahina</a>
              <button onClick={this.disconnect}  type="submit" className="btn btn-primary">
                  Se déconnecter
              </button>
            </div>
          
          </footer> 
        );
    }
}

export default Footer; */