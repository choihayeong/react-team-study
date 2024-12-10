import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate();

    return (
        <>
            <main className="main">
                <h1>Simple MBTI Test</h1>
                <Button btntext={`시작하기`} onClickEvent={() => navigate(`/test-page`)} />
            </main>
        </>
    );
};

export default Home;
