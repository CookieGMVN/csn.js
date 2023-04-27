/**
 * Data structure of your account after login.
 */
export default interface AccountLoginInfo {
    id: number,
    uid: number,
    username: string,
    name: string,
    avatar_url: string,
    cover_url: string,
    sessionId: string,
}