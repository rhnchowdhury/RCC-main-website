import React from 'react';
import img1 from '../../../Clients/+.png';
import img2 from '../../../Clients/1-1-200x100-1.png';
import img3 from '../../../Clients/2-200x100-1.png';
import img4 from '../../../Clients/3-200x100-1.png';
import img5 from '../../../Clients/Chilis.png';
import img6 from '../../../Clients/Dekchi.png';
import img7 from '../../../Clients/Dentist.png';
import img8 from '../../../Clients/Doors-200x100-1.png';
import img9 from '../../../Clients/Eden.png';
import img10 from '../../../Clients/Fehi.png';
import img11 from '../../../Clients/Galitos_Logo_Stacked_FullCol.png';
import img12 from '../../../Clients/Gelatisimo logo.png';
import img13 from '../../../Clients/Guardian Chambers.png';
import img14 from '../../../Clients/LOGO-DEkchi.png';
import img15 from '../../../Clients/Lakeshore_logo.png';
import img16 from '../../../Clients/Logo Gold.png';
import img17 from '../../../Clients/Logo-Output_Bowling.png';
import img18 from '../../../Clients/Peugeot-Brand-Logo-CMJN-WBG.png';
import img19 from '../../../Clients/Rabbithole.png';
import img20 from '../../../Clients/SC Progress.png';
import img21 from '../../../Clients/SLi.png';
import img22 from '../../../Clients/Santoor.png';
import img23 from '../../../Clients/Shawarma House.png';
import img24 from '../../../Clients/SwissContact.png';
import img25 from '../../../Clients/Volvo-Iron-Mark-White.png';
import img26 from '../../../Clients/gazi.png';
import img27 from '../../../Clients/securitas.png';
import img28 from '../../../Clients/stand.png';
import img29 from '../../../Clients/total care.png';
import './Client.css';

const Client = () => {
    return (
        <section className='bg-black p-32'>
            <h5 className='text-white text-center text-lg font-semibold'>Our Clients</h5>
            <div className='grid grid-cols-4'>
                <div className='client-img'>
                    <img src={img1} alt="" />
                </div>
            </div>
        </section>



    );
};

export default Client;