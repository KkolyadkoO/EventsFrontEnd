export interface UserLoginRequest {
    userName: string;
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
        if (!response.ok) {
            const errorData = await response.json();
            console.log(errorData);
            if (response.status === 400 && errorData) {
                throw new Error(errorData.message);
            } else {
                throw new Error("An unexpected error occurred during registration");
            }
        }

        // Registration succeeded, you can return success message if needed
        return await response.json();
};


export const Login = async (userLoginRequest: UserLoginRequest) => {
    await fetch("http://localhost:5163/api/Auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userLoginRequest),
    });
};

