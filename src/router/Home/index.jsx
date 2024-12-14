import { Link } from 'react-router-dom';
import './index.css';

export function Home() {
    return (
        <>
            <Link to="/address" className="btn-home">Address</Link>
        </>
    );
} 