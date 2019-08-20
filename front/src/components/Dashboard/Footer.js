import React from 'react';

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

export default Footer;