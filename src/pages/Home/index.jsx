import Button from "@/components/Button";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Home() {
    return (
        <div>
            <h1>Home page</h1>
            <Button icon={faFacebook}>Click me!</Button>
        </div>
    );
}

export default Home;
