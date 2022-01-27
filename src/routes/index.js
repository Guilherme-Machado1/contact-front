import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contact from '../pages/Contact';
import Contacts from '../pages/Contacts';
import Edit from '../pages/Edit';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Contacts /> } />
                <Route path="/contact/:id" element={<Contact /> } />
                <Route path="/contact/edit/:id" element={<Edit /> } />
            </Routes>
        </BrowserRouter>
    )
}