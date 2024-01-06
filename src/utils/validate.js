export const checkValidData = (email, password) => {
    const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    // in password must have small, capital letter and at least one digit and length must be more than 8
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isValidEmail) return 'Please Enter Valid Email'
    if (!isValidPassword) return 'Please Enter Valid Password'

    return null;
}