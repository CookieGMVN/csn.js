import BaseSearchData from "./BaseSearchData";

/**
 * More detailed song information.
 */
export default interface SongSearchData extends BaseSearchData {
    title: string,
    artist: string,
    userListened: number,
}