/// question 
export const question_1 = "Tell your prospective customers about yourself and/or all services that you can provide."
export const question_2 = "How would you describe your own working style?"
export const question_3 = "Tell your clients about something that has inspired you. Why do you think it made an important impact?"

// message 
export const message = {
    errorAddInfo: {
        messageID: 400,
        type: 'warning',
        message: 'Your information cannot be saved at this time. Please try again later.'
    },
    payment: {
        warning: {
            messageID: 400,
            type: 'warning',
            message: 'Your information cannot be saved at this time. Please try again later.'
        },
    },
    login: {
        messageID: 400,
        type: 'warning',
        message: "Your email or password is incorrect, Please check your input and try again."
    },
    update_profile: {
        buyer: {
            messageID: 200,
            type: 'success',
            message: 'Your information has been updated successfully.'
        }, provider: {
            messageID: 200,
            type: 'success',
            message: 'Your information has been updated successfully.'
        }
    },
    signup: {
        successOtp: {
            messageID: 200,
            type: 'success',
            message: 'Thank you. One time passcode will be sent to your phone.'
        },
        warningEmail: {
            messageID: 403,
            type: 'warning',
            message: 'Please enter your email address and desired password.'
        },
        warningPhone: {
            messageID: 403,
            type: 'warning',
            message: 'Please enter a North American phone number to receive your phone activation code.'
        },
        warningOTP: {
            messageID: 403,
            type: 'error',
            message: 'Your verification code is not accepted. Please try again.'
        },
        CompareEmail: {
            messageID: 400,
            type: 'warning',
            message: 'Email address is already registered. Please sign in.'
        },
        ComparePhone: {
            messageID: 400,
            type: 'warning',
            message: 'Phone number is already registered. Please sign in.'
        },
        noPhone: {
            messageID: 400,
            type: 'warning',
            message: 'Please enter a valid phone number.'
        }
    },
    ComparePhone: {
        messageID: 400,
        type: 'warning',
        message: 'Phone number is already registered. Please sign in.'
    },
    change_password: {
        success: {
            type: 'success',
            message: "You've successfully reset your password. Please log in."
        }
    },
    date_of_birth: {
        warning: {
            type: 'warning',
            message: 'You must be at least 18 years old to use Joulebook.com.'
        }
    },
    book_deal: {
        warning: {
            messageID: 500,
            type: 'warning',
            message: 'An unexpected error has occurred. Please try again later.'
        },
        Select_adress_warning: {
            messageID: 400,
            type: 'warning',
            message: "Please select service address"

        },
        success: {
            messageID: 200,
            type: "success",
            message: "Book deal success"
        }

    },
    get_api: {
        warning: {
            messageID: 300,
            type: 'warning',
            message: "Unable to connect to the server. Information may be incomplete. Please try again later."
        }
    }

} 