/**
 * Specify if login success or failed.
 */
export type LoginAPIData<C> = C extends 200 ? LoginSuccess : LoginFailed;

/**
 * Login failed notification.
 */
export interface LoginFailed {
    message: string,
    code: 400,
    data: null,
    error: string,
}

/**
 * Login success notification.
 */
export interface LoginSuccess {
    message: string,
    code: 200,
    data: {
        id: number,
        user_id: number,
        user_active: number,
        username: string,
        user_identity: string,
        user_fb_identity: string,
        name: string,
        user_level: number,
        user_session_time: number,
        user_session_page: number,
        user_lastvisit: number,
        user_regdate: number,
        user_music: number,
        user_comments: number,
        user_money: number,
        user_money_upload: number,
        user_money_download: number,
        user_login_tries: number,
        user_last_login_try: number,
        user_allow_viewonline: number,
        user_avatar: string,
        user_cover: string,
        email: string,
        user_phone_number?: string,
        user_interests?: string,
        user_actkey: string,
        user_birthday: string,
        user_gender: number,
        user_favourite: string,
        created_at: number,
        updated_at: number,
        user_music_recent: string,
        user_identity_card: null,
        vip_level: number,
        vip_time_exprited: null,
        user_music_search_recent: string,
        sid: string,
        remember_token_login: string,
        user_avatar_url: string,
        user_cover_url: string,
        incrementing: number,
        exists: number,
        wasRecentlyCreated: boolean,
        timestamps: number
    }
}