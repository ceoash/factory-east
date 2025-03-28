const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ukPhoneRegex = /^(?:\+44|0044|0)(?:7\d{9}|1\d{8,9}|2\d{9})$/;

export const isEmailValid = (email: string) => {
    return emailRegex.test(email);
}
export const isPhoneNoValid = (phone: string | number) => {
    return ukPhoneRegex.test(String(phone));
}