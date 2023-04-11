function getErrorMessage(error, statusCode) {
  console.log(error.name)
  if (error.name === "ValidationError") {
    const errorMessage = `Validation error: ${error.message}`;
    return {
      code: 500,
      message: "Some thing went wrong in Server we trying to fix it, Please contact gtext for more info",
    };
  }
  if (error.name === "Error") {
    const errorMessage = `${error.message}`;
    switch (statusCode) {
      case 400:
        return {
          code: statusCode,
          message: `Bad request : ${errorMessage} `,
        };
      case 401:
        return {
          code: statusCode,
          message: `Unauthorized:${errorMessage}`,
        };
    case 409:
        return {
            code:statusCode,
            message:"Email already exists"
        }
      default:
        return {
          code: 400,
          message: errorMessage,
        };
    }
  } else {
    return {
      code: 500,
      message: "Something went wrong ,Please try again",
    };
  }
}

module.exports = getErrorMessage;
