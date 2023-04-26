import axios from "axios";
import Client from "../Client";
import HTTPError from "../Typings/Classes/HTTPError";
import FileURL from "../Typings/Interfaces/FileURL";
import SongSearchData from "../Typings/Interfaces/SongSearchData";
import { ADD_FAVOURITE_ENDPOINT, GET_AUDIO_ENDPOINT } from "../Utils/Constants";

export default class Music {
    private readonly client: Client;
    public readonly songData: SongSearchData;

    public artist: string;
    public coverURL: string;
    public listened: number;
    public title: string;
    public songDetails: any;

    public constructor(client: Client, songData: SongSearchData) {
        this.client = client;

        this.songData = songData;

        this.artist = songData.artist;
        this.coverURL = songData.cover;
        this.listened = songData.userListened;
        this.title = songData.title;
    }

    private async getSongDetails(): Promise<any> {
        /**
         * Get song details.
         * @returns the song data from CSN's API.
         */
        return new Promise((res, rej) => {
            axios({
                url: encodeURI(GET_AUDIO_ENDPOINT),
                method: "POST",
                data: {
                    sid: this.client.sessionId,
                    music_id: this.songData.id,
                }
            }).then((data) => {
                if (data.data.code == 400 || data.data.status == 400) rej(new HTTPError("Can't get resource. Server responsed with HTTP 400."));
                if (data.data.code == 200) return res(data.data);
            }).catch((err) => {
                return rej(new Error(err));
            })
        });
    }

    public async getAudioUrl(): Promise<FileURL[]> {
        /**
         * Get list of audio URL of the song.
         * @returns audio URLs, in an array.
         */
        const audioUrl: FileURL[] = [];
        const songDetails = await this.getSongDetails();

        songDetails.data.music.file_urls.forEach((file_url: FileURL) => {
            audioUrl.push({
                url: file_url.url,
                label: file_url.label.toLowerCase(),
                size: file_url.size,
                type: file_url.type,
            });
        });

        return audioUrl;
    }

    public async getLyrics(): Promise<string> {
        /**
         * Get song's lyrics.
         * @returns song's lyrics, in string.
         */
        const songDetails = await this.getSongDetails();
        let songLyrics: string = songDetails.data.music.music_lyric;

        songLyrics = songLyrics.replaceAll("[NOSUB]", "");
        songLyrics = songLyrics.replaceAll("[/NOSUB]", "");
        songLyrics = songLyrics.replaceAll("<span style=\"color:#ffffff\">", "");
        songLyrics = songLyrics.replaceAll("</span>", "");
        songLyrics = songLyrics.replaceAll("<br />", "");

        return songLyrics;
    }

    public async getMusicLength(): Promise<number> {
        /**
         * Get song's length.
         * @returns get song's length, in seconds.
         */
        const songDetails = await this.getSongDetails();
        return Number(songDetails.data.music.music_length);
    }

    public async getSuggestions(): Promise<Music[]> {
        /**
         * Get song's suggestion.
         * @returns array of song suggested by CSN.
         */
        const songDetails = await this.getSongDetails();
        const result: Music[] = [];

        songDetails.data.sug.forEach((song: any) => {
            result.push(new Music(this.client, {
                title: song.music_title,
                artist: song.music_artist,
                userListened: song.music_listen,
                cover: song.music_cover,
                id: song.music_id
            }))
        })

        return result;
    }

    public addToFavourite(): void {
        /**
         * Add current song to favourite list. Account required.
         */
        if (!this.client.sessionId) throw new TypeError("You are not logged in.");
        axios({
            url: encodeURI(ADD_FAVOURITE_ENDPOINT),
            method: "POST",
            data: {
                sid: this.client.sessionId,
                type: "music",
                music_id: this.songData.id,
            }
        })
    }
}