/**
 * LoginError, triggered when can't login to your account.
 */
export default class LoginError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "LoginError";
    }
}