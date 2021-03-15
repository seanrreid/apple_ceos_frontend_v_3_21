import { useEffect, useState } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import CeoDetailsAsync from './CeoDetailsAsync';

const CeoList = ({ reload }) => {
    const [ceos, setCeos] = useState([]);
    const history = useHistory();

    useEffect(() => {
        (async () => {
            const ceoData = await fetch(
                'http://127.0.0.1:3333/ceos'
            ).then((response) => response.json());
            setCeos(ceoData);
        })();
    }, [reload]);

    return (
        <>
            {!!ceos.length ? (
                <>
                    <Route exact path='/'>
                        <ul>
                            {ceos.map((ceo, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={`/ceo/${ceo.slug}`}>
                                            {ceo.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </Route>
                    <Route path='/ceo/:ceo_slug'>
                        <CeoDetailsAsync />
                        <button type='button' onClick={() => history.goBack()}>
                            Go Back
                        </button>
                    </Route>
                </>
            ) : (
                <p>Loading CEOs...</p>
            )}
        </>
    );
};

export default CeoList;
