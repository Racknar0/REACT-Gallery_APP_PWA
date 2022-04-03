import React, { useCallback, useEffect, useState } from 'react';
import Card from './Card';

const Cards = () => {
    const [input, setInput] = useState('');
    const [images, setImages] = useState([]);

    const peticion = useCallback(async () => {
        const key = 'client_id=eNgRgbH2P2J--v3eWeL336q8L3Zml3mmPrFUSeb_ud0';
        let route = `https://api.unsplash.com/photos/?${key}`;

        if (input !== '') {
            route = `https://api.unsplash.com/search/photos/?query=${encodeURI(
                input
            )}&${key}`;
        }

        const res = await fetch(route);

        const data = await res.json();

        if (data.results) {
            setImages(data.results);
        } else {
            setImages(data);
        }
    }, [input]);

    useEffect(() => {
        peticion();
    }, [peticion]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const text = e.target[0].value;

        setInput(text);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label className="w-100">
                    {' '}
                    Buscar:{' '}
                    <input className="w-100" type="text" name="inputText" />
                </label>
                <button type="submit" className='btn btn-primary mt-3'>
                    <i class="bi bi-search me-1"></i>Buscar
                </button>
            </form>

            <hr />

            <div className="row">
                {images.map((img) => {
                    return (
                        <div
                            key={img.id}
                            className="col d-flex justify-content-center align-items-center"
                        >
                            <Card img={img.urls.regular} />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Cards;
