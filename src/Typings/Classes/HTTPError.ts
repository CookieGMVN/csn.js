/**
 * HTTPError, triggered when an HTTP error happens (403, 404, ...).
 */
export default class HTTPError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "HTTPError";
    }
}