export const CONSTANTS = {
  RESPONSE_CODE: {
    SUCCESS: 99999,
    INTERNAL_ERROR: 99990,
    INVALID_REQUEST: 30001,
  },

  STATUS: {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    TOO_MANY_REQUESTS: 429,
    INTERNAL_SERVER_ERROR: 500,
  },
  MESSAGES: {
    ERROR: {
      SERVER_DEFAULT_ERROR: 'Currently we were unable to process your request – please try again later.',
    },
  },
  STATUS_SUCCESS: 'SUCCESS',
  STATUS_ERROR: 'ERROR',
};
