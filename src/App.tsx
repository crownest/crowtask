import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';

export const App = () => (
    <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
        </Route>
    </Routes>
);
