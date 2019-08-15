import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';

import { Redirect } from 'react-router-dom'

import { Link } from 'react-router-dom';
class Home extends Component {
    // introduction= () =>{
    //     window.location = '/introduction'
    //         /* this.props.history.push('/dashboard'); */

    // }

    // introduction = () => {
    //     //window.location = '/introduction'
    //     <Redirect to='/introduction' />
    // }

    render() {
        return (
            <div class=" home col-md-6  ">
                <ul class="col-md-2 list-group ">
                    <div>
                        <li 
                        >
                            <Link className='li li1 list-group-item-action' to={"/introduction"}>INTRODUCTION</Link>
                        </li>
                    </div>
                    <li>

                        <Link  className='li li2 list-group-item-action ' to={"/objectif"}>OBJECTIF</Link>
                    </li>
                    <li >
                        <Link className='li li3 list-group-item-action' to={"/atelier"}>ATELIER</Link>

                    </li>
                </ul>
            </div>
        );
    }
}

export default Home;
