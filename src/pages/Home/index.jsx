import Button from "@/components/Button";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./Home.module.scss";
import config from "@/config";

function Home() {
    return (
        <div>
            <h1>Home page</h1>
            <Button icon={faChevronCircleRight} href={config.routes.users}>
                Click me 1!
            </Button>
            <Button
                icon={faChevronCircleRight}
                primary
                rounded
                // disabled
                loading
                className={styles.btnHome}
                onClick={() => alert("Hello")}
            >
                Click me 2!
            </Button>
            <Button icon={faChevronCircleRight} secondary>
                Click me 3!
            </Button>
            <Button icon={faChevronCircleRight} rounded>
                Click me 4!
            </Button>
        </div>
    );
}

export default Home;
