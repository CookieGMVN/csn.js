/**
 * Data of a playlist.
 */
export default interface PlaylistData {
    title: string,
    url: string,
    coverUrl: string,
    songNumber: number | null,
    id: number,
    artists: ArtistData[]
}

/**
 * Basic data of an artist.
 */
export interface ArtistData {
    url: string,
    name: string,
}