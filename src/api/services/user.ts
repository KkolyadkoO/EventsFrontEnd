export interface UserLoginRequest {
    username: string;
    password: string;
}

export interface UserRegisterRequest {
    userName: string;
    userEmail: string;
    password: string;
    role: string;
}

export interface UsersResponse {
    id: string;
    userName: string;
    userEmail: string;
    role: string;
}


export const RegistrationNewUser = async (userRegisterRequest: UserRegisterRequest) => {

    const response = await fetch("http://localhost:5163/User/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userRegisterRequest),
    });

    // Check if the response status is not OK (i.e., anything other than 200-299)
    if (!(response.status === 200)) {
        const errorData = await response.json();
        if (response.status === 400 && errorData) {
            throw new Error(errorData);
        } else {
            throw new Error("An unexpected error occurred during registration");
        }
    }
};


export const Login = async (userLoginRequest: UserLoginRequest) => {
    const response = await fetch("http://localhost:5163/api/Auth/login", {
        method: "POST",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userLoginRequest),
    });
    if (!(response.status === 200)) {
        const errorData = await response.json();
        if (response.status === 400 && errorData) {
            throw new Error(errorData);
        } else {
            throw new Error("An unexpected error occurred during registration");
        }
    }
    return response.json();
};

