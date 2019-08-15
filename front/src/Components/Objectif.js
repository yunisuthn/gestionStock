import React, { Component } from 'react';

import Home from './Home';
import Photo from './Photo';
import Navbar from './Navbar';
import Footer from './Footer';

class Introduction extends Component {

    render() {
        return (

            <div class=" container-fluid " id='div'>
                <div class=" row ">
                    <Navbar />
                    <div class=" container ">
                        <div class=" row ">
                            <div class=" col-md-2 ">
                                <Photo />
                            </div>

                            <div class=" col-md-3 col-6 home">
                                <Home />
                            </div>

                            <div class=" col-md-6 col-5 ">

                                <div className='row soratra1'>
                                    <p>Vous etes des jeunes actifs entre 25 - 35 ans. 
                                        Des personnes qui veulent apprendre à
                                        cuisiner afin de manger correctement.
                                    </p>
                                    <p>
                                        
                                        Nous sommes ici pour vous aider.
                                    </p>
                                    <p>

                                        Veuillez regarder nos ateliers et increvez-vous.
                                    </p>
                                </div>
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

export default Introduction;
