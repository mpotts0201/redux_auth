import React from 'react';

function CreatureIndex (props) {


        let data = []

        if (props.creatures) {
            data = props.creatures.map((creature) => {
                    return (
                    <div key={creature.id}>
                        <img style={{ width: 200, height: 200, borderRadius: '50%' }} src={creature.img_url} alt='Broken link' />
                        <h3>{creature.name}</h3>
                        <h6>{creature.description}</h6>
                    </div>
                    )
            })
        }

        return data

     
}

export default CreatureIndex;