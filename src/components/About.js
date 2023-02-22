import React from "react";

function About({image='https://via.placeholder.com/215', about})
{
    return (
        <aside>
            <img src={image} alt='Placeholder'/>
            <p>{about}</p>
        </aside>
    );
}

export default About;