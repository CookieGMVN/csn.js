import TypeScript from "typescript";
import Music from "./Classes/Music";
import Playlist from "./Classes/Playlist";
import Search from "./Classes/Search";
import TopChart from "./Classes/TopChart";
import User from "./Classes/User";
import Client from "./Client";

import HTTPError from "./Typings/Classes/HTTPError";
import LoginError from "./Typings/Classes/LoginError";

import AccountLoginData from "./Typings/Interfaces/AccountLoginData";
import AccountLoginInfo from "./Typings/Interfaces/AccountLoginInfo";
import BaseSearchData from "./Typings/Interfaces/BaseSearchData";
import ClientOptions from "./Typings/Interfaces/ClientOptions";
import FileURL from "./Typings/Interfaces/FileURL";
import GetListenHistoryOptions from "./Typings/Interfaces/GetListenHistoryOptions";
import { LoginAPIData, LoginFailed, LoginSuccess } from "./Typings/Interfaces/LoginAPIData";
import LoginData from "./Typings/Interfaces/LoginData";
import PlaylistData, { ArtistData } from "./Typings/Interfaces/PlaylistData";
import ProfileDetails from "./Typings/Interfaces/ProfileDetails";
import SongSearchData from "./Typings/Interfaces/SongSearchData";
import TopChartGetOptions from "./Typings/Interfaces/TopChartGetOptions";
import ClientEvents from "./Utils/ClientEvents";

export { 
    Music,
    Playlist,
    Search,
    TopChart,
    User,
    Client
}

export {
    type HTTPError,
    type LoginError,
    type AccountLoginData,
    type AccountLoginInfo,
    type BaseSearchData,
    type ClientOptions,
    type FileURL,
    type GetListenHistoryOptions,
    type LoginAPIData,
    type LoginData,
    type PlaylistData,
    type ProfileDetails,
    type SongSearchData,
    type TopChartGetOptions,
    type LoginFailed,
    type LoginSuccess,
    type ClientEvents,
    type ArtistData
}