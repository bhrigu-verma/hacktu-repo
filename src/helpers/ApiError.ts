class ApiError extends Error {
    statusCode: number;
    errors: any[];
    success: boolean;
    message: string;
    stack?: string;

    constructor(
        statusCode: number,
        message: string = "something went wrong",
        errors: any[] = [],
        stack: string = ""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.errors = errors;
        this.success = false;
        this.message = message;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };
