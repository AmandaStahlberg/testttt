import { useState } from 'react';


export default function EditUserProfile({
    stored,
    startEditCallback
}) {

    return <div>
          <div>
            <h2>Username:</h2> {stored.username}
        </div>
        <div>
            <h2>Name:</h2> {stored.name}
        </div>
        <div>
            <h2>Height:</h2> {stored.height}
        </div>
        <div>
            <h2>Weight:</h2> {stored.weight}
        </div>
        <div>
            <button
                onClick={startEditCallback}
            >Edit</button>
        </div>
    </div>
}