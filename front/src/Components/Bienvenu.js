import React from 'react';

class Bienvenu extends React.Component{

    render() {
        return (
            <div>
                <div className=' bienvenu' >
                    <h1 className='robot'>BIENVENU</h1>
                    <div className='para' >
                        <p>
                            Nous sommes un centre de formation de cuisine qui propose des ateliers à nos élèves à
                            partir de 12 ans, mais aussi à des particuliers.
                        </p>
                        <p className=''>
                            Les cours proposés aux particuliers permettent de financer l’achat de matériels et de
                            matières premières.
                        </p>
                        <p className=''>
                            C’est la raison pour laquelle nous souhaitons booster cette activité.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bienvenu;