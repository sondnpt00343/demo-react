import { useNavigate, useSearchParams } from "react-router-dom";

import httpRequest from "@/utils/httpRequest";
import authService from "@/services/authService";
import Form, { TextInput } from "@/components/Forms";
import config from "@/config";

function Login() {
    const [params] = useSearchParams();
    const navigate = useNavigate();

    const handleSubmit = async (data) => {
        const response = await authService.login(data);
        httpRequest.setToken(response.access_token);
        navigate(params.get("continue") || config.routes.home);
    };

    return (
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <TextInput name="email" />
                <TextInput name="password" />
                <button>Login</button>
            </Form>
        </div>
    );
}

export default Login;
