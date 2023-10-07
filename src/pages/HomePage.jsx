
import { useEffect, useState } from "react";


const HomePage = () => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const writtenToken = urlSearchParams.get('token');
        setToken(writtenToken);
    }, [])

    return (
        <div style={{ marginTop: "150px" }}>{token}</div>
    );
}

export default HomePage;