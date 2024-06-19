import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

const images = [
    '/assets/ddhh_background.webp',
    '/assets/case3-background.webp',
    '/assets/image123.jpg',
];

const App = () => (
    <>
        <Carousel arrows infinite={true}>
            {images.map((image, index) => (
                <div key={index} className="relative w-full mt-2 h-[420px]"> {}
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
