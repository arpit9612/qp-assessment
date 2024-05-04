import { Response } from 'express';
import { CONSTANTS } from '../config/constants/constants';
export class ErrorHandler {

  constructor() { }

  handleException(res: Response) {
    return res.status(CONSTANTS.STATUS.INTERNAL_SERVER_ERROR).json({
      status: CONSTANTS.STATUS_ERROR,
      message: CONSTANTS.MESSAGES.ERROR.SERVER_DEFAULT_ERROR,
      responseCode: CONSTANTS.RESPONSE_CODE.INTERNAL_ERROR
    });
  }
}

export const errorHandler = new ErrorHandler();
