import { Gallery } from "../components/CoursesGallery/Gallery";
import { Button } from "../components/common";
import { useAuthStore } from "../store/auth";


const CoursesPage = () => {
    const isAuth = useAuthStore((state) => state.isAuth);
    const logout = useAuthStore((state) => state.logout);
    return (
        <>
            {
                isAuth &&
                    <div style={{  marginTop: '50px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <h1 style={{ fontSize: '50px' }}>You are Logged In</h1>
                        <Button
                            variant='secondary'
                            size='standard'
                            type='button'
                            onClick={logout}
                        >
                            Logout
                        </Button>
                    </div>
            }
            
            <Gallery />
        </>
        
    );
};

export default CoursesPage;