module.exports = (res, statusCode, message) => {
    res.status(statusCode).json({
      error: statusCode >= 400,
      message
    });
  };