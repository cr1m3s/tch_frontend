import { useEffect, useState } from 'react';
import { Gallery } from '../components/CoursesGallery/Gallery';
import { fetchAllAdverts } from '../services';


const CoursesPage = () => {
    const [adverts, setAdverts] = useState(null);
    
    
    useEffect(() => {
        getAdverts();
    }, []);


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