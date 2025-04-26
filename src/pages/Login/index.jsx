import { useNavigate, useSearchParams } from "react-router-dom";

import { useDispatch } from "react-redux";

import authService from "@/services/authService";
import Form, { TextInput } from "@/components/Forms";
import { getCurrentUser } from "@/features/auth/authAsync";
import config from "@/config";

function Login() {
    const [params] = useSearchParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (data) => {
        const response = await authService.login(data);
        localStorage.setItem("token", response.access_token);
        localStorage.setItem("refresh_token", response.refresh_token);

        dispatch(getCurrentUser());
        navigate(params.get("continue") || config.routes.home);
    };

    return (
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <TextInput name="email" value="dungvq015@gmail.com" />
                <TextInput type="password" name="password" value="12345678" />
                <button>Login</button>
            </Form>
        </div>
    );
}

export default Login;
