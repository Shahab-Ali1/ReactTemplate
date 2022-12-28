
export const getToken = () => {
    try {
        let token =
            localStorage.getItem("tokendummy") !== null &&
                localStorage.getItem("tokendummy") !== undefined
                ? JSON.parse(localStorage.getItem("tokendummy"))
                : "";
                return token
    } catch (error) {
        console.log(error);
    }
}