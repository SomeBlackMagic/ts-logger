'use strict';

/******************************************* LOG LEVEL ********************************************/
// export const isSilly = env.LOG_LEVEL === "silly";
// export const isVerbose = isSilly || env.LOG_LEVEL === "verbose";
// export const isDebug = isVerbose || env.LOG_LEVEL === "debug";
// export const isInfo = isDebug || env.LOG_LEVEL === "info";
// export const isWarn = isInfo || env.LOG_LEVEL === "warn";
// export const isError = isWarn || env.LOG_LEVEL === "error";
// export const isWTF = isError || env.LOG_LEVEL === "wtf";


export enum LogLevel {
    ALL = 0,
    TRACE = 1,
    DEBUG = 2,
    INFO = 3,
    WARN = 4,
    ERROR = 5,
    FATAL = 6,
}


export enum LogLevelString {
    'all',
    'trace',
    'debug',
    'info',
    'warning',
    'error',
    'fatal'
}