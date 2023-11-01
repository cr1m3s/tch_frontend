import { Link } from "react-router-dom";


const MyAdvertsPage = () => {
    return (
        <div>
            <div style={{ marginTop: '50px', marginBottom: '50px', fontSize: '50px', textAlign: 'center' }}>
                Here will be a list of my posts!
            </div>
            
            <Link
                to='/add-advert'
                style={{ fontSize: '30px', backgroundColor: '#D7DD73', padding: '8px', color: '#FFFFFF', borderRadius: '10px' }}
            >
                Add advertesment
            </Link>
        </div>


    );
};

export default MyAdvertsPage;