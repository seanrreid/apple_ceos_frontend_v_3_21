import { useState } from 'react';

const AddCeo = ({ handleReload }) => {
    const [ceoName, setCeoName] = useState('');
    const [ceoYear, setCeoYear] = useState('');
    const [submitError, setSubmitError] = useState(null);

    const _handleSubmit = async (e) => {
        e.preventDefault();
        const submitResponse = await fetch('http://127.0.0.1:3333/ceos', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({ ceo_name: ceoName, ceo_year: ceoYear }),
        }).then((response) => response);
        console.log('submit response is,', submitResponse.status);
        setCeoName('');
        setCeoYear('');

        if (submitResponse.status === 200) {
            handleReload(true);
        } else {
            setSubmitError(submitResponse.statusText);
        }
    };

    const _handleName = (e) => {
        setCeoName(e.target.value);
    };

    const _handleYear = (e) => {
        setCeoYear(e.target.value);
    };

    return (
        <>
            <form onSubmit={_handleSubmit}>
                <label>
                    CEO Name
                    <input
                        type='text'
                        name='ceoName'
                        value={ceoName}
                        onChange={_handleName}
                    />
                </label>
                <label>
                    CEO Year
                    <input
                        type='text'
                        name='ceoYear'
                        value={ceoYear}
                        onChange={_handleYear}
                    />
                </label>
                <button type='submit'>Add Ceo</button>
            </form>
            {!!submitError && <div className='error'>{submitError}</div>}
        </>
    );
};

export default AddCeo;
