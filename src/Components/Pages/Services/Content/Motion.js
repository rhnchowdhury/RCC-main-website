import React from 'react';
import './Motion.css';
import vdo1 from '../../../../video/motion/3 Bokul.mp4';
import vdo2 from '../../../../video/motion/1 Bokul+Sajib.mp4';
import vdo3 from '../../../../video/motion/1 Bokul.mp4';
import vdo4 from '../../../../video/motion/2 Sajib.mp4';
import vdo5 from '../../../../video/motion/2.2 Bokul.mp4';
import vdo6 from '../../../../video/motion/Galitos Sauce Motion Output F2.mp4';
import vdo7 from '../../../../video/motion/Galitos juice Reel motion Output F3 (rework)_2 11.mp4';
import vdo8 from '../../../../video/motion/6 Sajib.mp4';
import vdo9 from '../../../../video/motion/4.3 Sajib.mp4';
import vdo10 from '../../../../video/motion/Volvo video Final edited.mp4';
import vdo11 from '../../../../video/motion/10 Sajib.mp4';
import vdo12 from '../../../../video/motion/FIH motion Output F2.mp4';
import vdo13 from '../../../../video/motion/25th march special.mp4';
import vdo14 from '../../../../video/motion/gazi tanks.mp4';
import vdo15 from '../../../../video/motion/Fittings motion.mp4';
import vdo16 from '../../../../video/motion/Pipe motion.mp4';
import vdo17 from '../../../../video/motion/26th March Special.mp4';
import vdo18 from '../../../../video/motion/gazi toys.mp4';
import vdo19 from '../../../../video/motion/Sink Motion.mp4';
import vdo20 from '../../../../video/motion/Mothers day special.mp4';
import WorkAll from '../../Works/WorkAll';

const Motion = () => {
    return (
        <section className='motion-section'>
            <div className='motion-header'>
            </div>
            <div className='mt-5'>
                <h1 className='motion-h1'>Motion Design</h1>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-3 m-8'>
                    <video autoPlay loop controls>
                        <source src={vdo1} type='video/mp4' />
                    </video>
                    <video autoPlay loop controls>
                        <source src={vdo2} type='video/mp4' />
                    </video>
                    <video autoPlay loop controls  >
                        <source src={vdo3} type='video/mp4' />
                    </video>
                    <video autoPlay loop controls    >
                        <source src={vdo4} type='video/mp4' />
                    </video>
                    <video autoPlay loop controls >
                        <source src={vdo5} type='video/mp4' />
                    </video>
                    <video autoPlay loop controls >
                        <source src={vdo6} type='video/mp4' />
                    </video>
                    <video autoPlay loop controls >
                        <source src={vdo7} type='video/mp4' />
                    </video>
                    <video autoPlay loop controls >
                        <source src={vdo8} type='video/mp4' />
                    </video>
                    <video autoPlay loop controls >
                        <source src={vdo9} type='video/mp4' />
                    </video>
                    <video autoPlay loop controls >
                        <source src={vdo10} type='video/mp4' />
                    </video>
                    <video autoPlay loop controls >
                        <source src={vdo11} type='video/mp4' />
                    </video>
                    <video autoPlay loop controls >
                        <source src={vdo12} type='video/mp4' />
                    </video>
                    <video autoPlay loop controls >
                        <source src={vdo13} type='video/mp4' />
                    </video>
                    <video autoPlay loop controls >
                        <source src={vdo14} type='video/mp4' />
                    </video>
                    <video autoPlay loop controls >
                        <source src={vdo15} type='video/mp4' />
                    </video>
                    <video autoPlay loop controls >
                        <source src={vdo16} type='video/mp4' />
                    </video>
                    <video autoPlay loop controls >
                        <source src={vdo17} type='video/mp4' />
                    </video>
                    <video autoPlay loop controls >
                        <source src={vdo18} type='video/mp4' />
                    </video>
                    <video autoPlay loop controls >
                        <source src={vdo19} type='video/mp4' />
                    </video>
                    <video autoPlay loop controls >
                        <source src={vdo20} type='video/mp4' />
                    </video>
                </div>
            </div>
            <div>
                <h1 className='motion-h1'>Creative Design</h1>
                <WorkAll></WorkAll>
            </div>
        </section>
    );
};

export default Motion;