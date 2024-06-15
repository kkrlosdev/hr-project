import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

const images = [
    '/assets/image123.jpg',
    '/assets/case3-background.webp',
    '/assets/ddhh_background.webp',
];

const App = () => (
    <>
        <Carousel arrows infinite={true}>
            {images.map((image, index) => (
                <div key={index} className="relative w-full h-72"> {}
                    <Image 
                        src={image} 
                        alt={`Imagen ${index + 1}`} 
                        layout="fill" 
                        objectFit="cover" 
                        className="object-cover"
                    />
                </div>
            ))}
        </Carousel>
        <br />
    </>
);

export default App;
