import { useParams } from 'react-router-dom';

const CeoDetails = ({ ceos }) => {
    const { ceo_slug } = useParams();
    const ceo = ceos.find((ceo) => {
        return ceo.slug === ceo_slug ? ceo : null;
    });

    return <p>{ceo.name} was CEO of Apple in {ceo.year}</p>;
};

export default CeoDetails;
