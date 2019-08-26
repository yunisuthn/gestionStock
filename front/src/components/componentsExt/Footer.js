import React from 'react';

class Footer extends React.Component {

    render() {
        return (
            <div class="Footer">
              <div class="Footer-inner">
                <a href="/" class="rss-tag-icon" title="RSS"></a>
                  <div class="Footer-text">
                    <p>
                      © 2019 Copyright:
                  RAZANAKINIAINA Onisoa Tahina.<br />
                      <a href="/">Accueil</a> | 
                      <a href="/connecter">Connecter</a> | 
                      {/* <a href="#">Trademarks</a> |
                      <a href="">Privacy Statement</a> */}
                    </p>
                    </div>
              </div>
              <div class="Footer-background"></div>
            </div>
        );
    }
}

export default Footer;





           {/* <footer className=" mx-auto mt-5 page-footer font-small  darken-3">
              <div className="footer-copyright text-center py-3">© 2019 Copyright:
                <a href=""> RAZANAKINIAINA Onisoa Tahina</a>
              </div>
            
            </footer>  
          <div></div>*/}