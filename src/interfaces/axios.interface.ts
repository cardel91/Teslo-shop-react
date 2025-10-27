export interface CustomAxiosError {
    message: string;
    name: string;
    stack: string;
    config: Config;
    code: string;
    status: number;
    response: ErrorResponse;
}

export interface Config {
    transitional: Transitional;
    adapter: string[];
    transformRequest: null[];
    transformResponse: null[];
    timeout: number;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    maxContentLength: number;
    maxBodyLength: number;
    headers: Headers;
    baseURL: string;
    method: string;
    url: string;
    data: string;
    allowAbsoluteUrls: boolean;
}

export interface Headers {
    Accept: string;
    "Content-Type": string;
}

export interface Transitional {
    silentJSONParsing: boolean;
    forcedJSONParsing: boolean;
    clarifyTimeoutError: boolean;
}

export interface ErrorResponse {
    data: Data;
    status: number;
    statusText: string;
    headers: ErrorResponseHeaders;
    config: Config;
}

export interface Config {
    transitional: Transitional;
    adapter: string[];
    transformRequest: null[];
    transformResponse: null[];
    timeout: number;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    maxContentLength: number;
    maxBodyLength: number;
    env: Request;
    headers: ConfigHeaders;
    baseURL: string;
    method: string;
    url: string;
    data: string;
    allowAbsoluteUrls: boolean;
}


export interface ConfigHeaders {
    Accept: string;
    "Content-Type": string;
}

export interface Transitional {
    silentJSONParsing: boolean;
    forcedJSONParsing: boolean;
    clarifyTimeoutError: boolean;
}

export interface Data {
    message: string[] | string;
    error: string;
    statusCode: number;
}

export interface ErrorResponseHeaders {
    "content-length": string;
    "content-type": string;
}
