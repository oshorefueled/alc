/**
 * Created by osho on 10/30/17.
 */

function ALCError(message, code) {
    if(Error.captureStackTrace){
        Error.captureStackTrace(this);
    } else {
        this.stack = new Error().stack;
    }
    this.message = message;
    this.name = "ALCError";
    this.code = code;
}


ALCError.prototype = Object.create(Error.prototype);
ALCError.constructor = ALCError;

module.exports = ALCError;