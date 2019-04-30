import React from 'react';

function ProfileCard(props) {
    return(
        <div>
            <h1>{props.pet.name}</h1>
        </div>
    )
}

export default ProfileCard