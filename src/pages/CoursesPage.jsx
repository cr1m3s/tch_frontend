import { Gallery } from "../components/CoursesGallery/Gallery";
import PropTypes from 'prop-types';

const CoursesPage = ({ isLoggedIn }) => {
    return (
        <>  
            {
                isLoggedIn && <h1 style={{ marginTop: '50px', marginBottom: '50px', fontSize: '50px' }}>You are Logged In</h1>
            }
            
            <Gallery />
        </>
        
    );
}

CoursesPage.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
};

export default CoursesPage;