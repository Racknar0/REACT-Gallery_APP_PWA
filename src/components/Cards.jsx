import { useFetchImages } from '../hooks/useFetchImages';
import Card from './Card';
import FormImg from './FormImg';
import Loading from './Loading';

const Cards = () => {
    const [images, loading, handleSubmit] = useFetchImages()

    return (
        <>
            <FormImg handleSubmit={handleSubmit} />

            <hr />
            { loading && <Loading /> }

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
