import { Routes, Route } from 'react-router-dom';
import BoardsPage from './pages/BoardsPage';
import Layout from './components/Layout';

export const App = () => (
    <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<BoardsPage />} />
        </Route>
    </Routes>
);
