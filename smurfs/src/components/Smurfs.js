import React from 'react';

import Smurf from '../components/Smurf';

const Smurfs = props => {
    return (
        <div>
            {props.smurfs.map(smurf => 
                <Smurf key={smurf.id} smurf={smurf} />
            )}
        </div>
    )
}

export default Smurfs;