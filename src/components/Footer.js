import React from 'react'

import Logo from './imgs/logo.png'

export default function Footer() {
    return (
        <div class="w-screen bg-transparent">
            <div>
            <img class="m-auto h-44 md:h-56" src={Logo}/>
            </div>
        </div>
    );
}