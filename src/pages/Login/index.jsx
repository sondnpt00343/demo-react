import config from "@/config";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Login() {
    const [params] = useSearchParams();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasError, setHasError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formValues = { email, password };

        fetch("https://api01.f8team.dev/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formValues),
        })
            .then((res) => {
                if (!res.ok) throw res;
                return res.json();
            })
            .then((data) => {
                localStorage.setItem("token", data.access_token);
                navigate(params.get("continue") || config.routes.home);
            })
            .catch(() => {
                setHasError(true);
            });
    };

    return (
        <div>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setHasError(false);
                    }}
                />
                <br />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setHasError(false);
                    }}
                />
                <br />
                {hasError && <p>Email hoặc mật khẩu không hợp lệ.</p>}
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;
