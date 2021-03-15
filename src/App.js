import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CeoList from './components/CeoList';
import AddCeo from './components/AddCeo';

function App() {
    const [reloadList, setReloadList] = useState(false);

    const handleReload = (status) => {
        setReloadList(status);
    }

    return (
        <div className='App'>
            <h1>Apple CEOs</h1>
            <AddCeo handleReload={handleReload} />
            <Router>
                <CeoList reload={reloadList} />
            </Router>
        </div>
    );
}

export default App;
