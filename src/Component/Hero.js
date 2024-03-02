import React from 'react';

const Hero = () => {
    let cities = ['dhaka', 'kolkata', 'dilli', 'bangkok'];

    return (
        <div>
            <ul>
                {cities.map((city, index) => (
                    <li key={index.toString()}>
                        {city}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Hero;
