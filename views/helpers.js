module.exports = {
    // This is a helper function that will return the error message for a given property
    // if it exists in the errors object
    getError (errors, prop) {
        try {
            return errors.mapped()[prop].msg;
        } catch (err) {
            return '';
        }
    }
};