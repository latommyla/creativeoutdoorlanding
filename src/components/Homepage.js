import React from 'react'

import Logo from './imgs/logo.png'

export default function Homepage() {
    return (
        <div class="bg-cover h-screen w-screen">
            <div class="md:mx-auto h-screen flex">
                <div class="text-center text-white mx-auto font-bebas">
                    <img src={Logo} class="m-auto md:ml-2 h-44 md:h-56" alt="Creative Outdoor Logo" title="Creative Outdoor Logo"/>
                    <div class="md:w-screen m-auto md:m-auto">
                        <div class="m-auto mt-0 sm:mt-44 md:mt-44 lg:mt-96">
                        <span class="m-auto text-5xl md:text-7xl drop-shadow-lg">Market leader</span>
                        <br></br>
                        <span class="m-auto text-4xl md:text-7xl drop-shadow-lg">Outdoor lifestyle products </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}