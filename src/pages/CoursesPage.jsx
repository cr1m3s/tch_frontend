import { useEffect, useState } from 'react';
import { Gallery } from '../components/CoursesGallery/Gallery';
import { fetchAllAdverts } from '../services';


const CoursesPage = () => {
    const [adverts, setAdverts] = useState([]);    

    useEffect(() => {
        async function getAdverts() {
            try {
                const data = await fetchAllAdverts();
                setAdverts(data);
                
                return data;
            } catch(error) {
                console.log(error.message);
            }
        }

        getAdverts();
    }, []);

    console.log('from page', adverts);

    return (
        <>
            <Gallery adverts={adverts} />
        </>
        
    );
};

export default CoursesPage;