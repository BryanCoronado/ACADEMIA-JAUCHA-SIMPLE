import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import slider1 from '../../galeria/dt.png';
import dt from '../../galeria/slider1.png';
import slider2 from '../../galeria/slider2.png';
import slider3 from '../../galeria/slider3.png';
import './introduccion.css';

export default function IndicatorsDemo() {
    const [images, setImages] = useState(null);

    useEffect(() => {
        const dummyImages = [
            { itemImageSrc: dt, thumbnailImageSrc: dt, alt: 'Imagen 5' },
            { itemImageSrc: slider1, thumbnailImageSrc: slider1, alt: 'Imagen 1' },
            { itemImageSrc: slider2, thumbnailImageSrc: slider2, alt: 'Imagen 2' },
            { itemImageSrc: slider3, thumbnailImageSrc: slider3, alt: 'Imagen 3' },
        ];

        setImages(dummyImages);
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '80%', display: 'block' ,marginRight:'50px' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="contenedor-introduccion">
        <div className="galleria-container">
            <Galleria
                value={images}
                numVisible={5}
                circular
                style={{ maxWidth: '640px' }}
                showItemNavigators
                showItemNavigatorsOnHover
                showIndicators
                showThumbnails={false}
                item={itemTemplate}
                thumbnail={thumbnailTemplate}
            />
            <div className="card">
                <div className="contenido-card">
                <h2>Quienes Somos?</h2>
                <p>Somos [Nombre de la Academia],
el espacio donde los sueños futboleros se hacen realidad. Desde infantes hasta adultos, 
compartimos una pasión: el fútbol. Nuestra 
misión es nutrir esa pasión, desarrollar habilidades 
excepcionales y crear una comunidad unida a través 
del hermoso juego. Únete a nosotros mientras conquistamos 
el campo y forjamos amistades duraderas. 
¡Bienvenido a la familia [Nombre de la Academia]!
                </p>
                </div>


            </div>
        </div>
        </div>
    );
}
