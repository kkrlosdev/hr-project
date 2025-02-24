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
        <Carousel autoplay={true} infinite={true} autoplaySpeed={3000} speed={1000} effect='fade'>
            {images.map((image, index) => (
                <div key={index} className="relative w-full  h-[420px]"> {}
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
