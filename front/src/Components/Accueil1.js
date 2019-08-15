import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Photo from './Photo';

class Accueil extends Component {
    render() {
        return (
            <div>
                <div class=" container-fluid " >
                    <div class=" row ">
                        <Navbar />
                        <div class="container">
                            <div class=" col-md-2 col-5 ">
                                <Photo />
                            </div>
                            <div class=" col-md-3 col-5 home1">
                                <Home />
                            </div>
                        </div>
                    </div>

              <div class=" container-fluid  "  id='div'>
                    <Footer />
                </div>
                </div>
            </div>
        );
    }
}

export default Accueil;
