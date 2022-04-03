import { useCallback, useEffect, useState } from "react";

export const useFetchImages = () => {
    const [input, setInput] = useState('');
    const [images, setImages] = useState([]);

    const [loading, setLoading] = useState(true)

    const peticion = useCallback(async () => {
        const key = 'client_id=eNgRgbH2P2J--v3eWeL336q8L3Zml3mmPrFUSeb_ud0';
        let route = `https://api.unsplash.com/photos/?${key}`;

        if (input !== '') {
            route = `https://api.unsplash.com/search/photos/?query=${encodeURI(
                input
            )}&${key}`;
        }

        setLoading(true)

        const res = await fetch(route);

        const data = await res.json();

        setTimeout(() => {
            if (data.results) {
                setImages(data.results);
            } else {
                setImages(data);
            }

            setLoading(false)
        }, 1000);

        

    }, [input]);

    useEffect(() => {
        peticion();
    }, [peticion]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const text = e.target[0].value;

        setInput(text);
    };

    return [images, loading, handleSubmit]
}

