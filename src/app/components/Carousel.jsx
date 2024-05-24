import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
const contentStyle = {
    margin: 0,
    height: '260px',
    color: '#fff',
    lineHeight: '260px',
    textAlign: 'center',
    background: '#364d79',
};

const images = [
    '/assets/case1-image.png',
    '/assets/case3-background.png',
    '/assets/ddhh_background.png',
];

const App = () => (
    <>
        <Carousel arrows infinite={true}>
            {images.map((image, index) => (
            <div key={index}>
                <Image src={image} alt={`Imagen ${index + 1}`} width={100} height={100} style={{ ...contentStyle, objectFit: 'contain'}} className='w-full'/>
            </div>
            ))}
        </Carousel>
        <br />
    </>
);

export default App;