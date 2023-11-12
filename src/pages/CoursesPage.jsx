import { useEffect, useState } from 'react';
import { Gallery } from '../components/CoursesGallery/Gallery';
import { fetchAllAdverts } from '../services';
import { useAuthStore } from '../store/auth';
import { useNavigate } from 'react-router-dom';


const CoursesPage = () => {
    const [adverts, setAdverts] = useState(null);
    const { token } = useAuthStore();
    const navigate = useNavigate();
    
    
    useEffect(() => {
        if (token) {
            getAdverts();
        } else {
            navigate('/login');
        }
    }, [token, navigate]);


    async function getAdverts() {
        try {
            const data = await fetchAllAdverts();
            setAdverts(data);
            
            return data;
        } catch(error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <Gallery adverts={adverts} />
        </>
        
    );
};

export default CoursesPage;