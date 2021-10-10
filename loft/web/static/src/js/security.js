
; (function (global) {
    'use strict';

    /// Query string parameters.
    const params = new URLSearchParams(window.location.search);

    /// The secret key for OTP generation. Will be `null` if no `secret`
    /// query param is passed.
    const secret = params.get('secret');

    /// JS-OTP OTP generator.
    const otp = new global.jsOTP.totp();

    /**
     * @returns {string} access key for interacting with the loft API
     */
    function pwd() {
        return otp.getOtp(secret);
    }

    if (global.loft === undefined) global.loft = {};
    Object.assign(global.loft, {
        pwd,
    });
})(globalThis);
