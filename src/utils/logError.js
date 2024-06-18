// utils/logError.js
import ErrorLog from '../models/errorLog.js';

export const logError = async (error, req) => {
  try {
    await ErrorLog.create({
      message: error.message,
      stack: error.original?.sqlMessage,
      url: req.originalUrl,
      method: req.method,
      params: req.params,
      body: req.body,
    });
  } catch (loggingError) {
    console.error('Error logging the error:', loggingError);
  }
};
