import AccountLoginInfo from "../Typings/Interfaces/AccountLoginInfo";

/**
 * Events for client.
 */
export default interface ClientEvents {
    login: [data: AccountLoginInfo];
}