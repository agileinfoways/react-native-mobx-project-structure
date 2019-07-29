import { Dimensions, Platform } from 'react-native';
var { height, width } = Dimensions.get('window');

export const CONST = {
    APP_NAME: 'Your app name',
    DEVICE_HEIGHT: height,
    DEVICE_WIDTH: width,
    DEVICE_OS: Platform.OS,

    //SCREEN TITLES
    TITLE_HOME: 'Home',
    TITLE_LOGIN: 'Login',

    //ERROR MESSAGES
    GENERAL_API_ERROR: "Something went wrong, Please try again",
    INTERNET_ERROR: 'Please check your internet connection and try again!',

    //CONFIRMATION ALERT MESSAGES
    LOGOUT_CONFIRM: "Are you sure you want to logout?",
    SESSION_EXPIRED: "Your session has been expired, please do login again.",

    //VALIDATION MESSAGES
    VAL_MSG_EMPTY_FIRST_NAME: "Please enter your full name.",
    VAL_MSG_VALID_FIRST_NAME: "Please enter valid full name.",
    VAL_MSG_EMPTY_LAST_NAME: "Please enter your last name.",
    VAL_MSG_VALID_LAST_NAME: "Please enter valid last name.",
    VAL_MSG_EMPTY_EMAIL: "Please enter your email address.",
    VAL_MSG_EMPTY_PASSWORD: "Please enter your password.",
    VAL_MSG_EMPTY_NEW_PASSWORD: "Please enter your new password.",
    VAL_MSG_EMPTY_CONFIRM_PASSWORD: "Please enter confirm password.",
    VAL_MSG_EMPTY_PHONE: "Please enter phone number.",
    VAL_MSG_VALID_PHONE_NUMBER: "Please enter valid phone number.",
    VAL_MSG_FIRST_NAME_INVALID: "Please enter your full name between 2 to 32 char.",
    VAL_MSG_LAST_NAME_INVALID: "Please enter your last name between 2 to 32 char.",
    VAL_MSG_EMAIL_INVALID: "Please enter valid email address.",
    VAL_MSG_PASSWORD_HINT: "Password can be only alphanumeric and few special characters _ @ . / # & ! + -",
    VAL_MSG_PASSWORD_INVALID: "Please enter password minimum 6 char.",
    VAL_MSG_PASSWORD_CONFIRM_PASSWORD_MATCH: "Password and confirm password not match with each-other.",
    VAL_MSG_PHONE_INVALID: "Phone number must be between 6 to 16 digits.",
    VAL_MSG_EMPTY_POST_TITLE: "Please enter post title.",
    VAL_MSG_EMPTY_POST_DESCRIPTION: "Please enter post description.",
    VAL_MSG_EMPTY_POST: "Please select image or video.",
    VAL_MSG_EMPTY_CATEGORY: "Please select at least one category.",
    VAL_MSG_REENTER_PASSWORD: "Please re-enter new password.",
    VAL_MSG_PASSWORD_REENTER_PASSWORD_MATCH: "Password and re-enter password not match with each-other.",
    VAL_MSG_EMPTY_OLD_PASSWORD: "Please enter your old password.",
    VAL_MSG_NAME_INVALID: "Please enter your name between 2 to 32 char.",
    
    // FIXED CONSTANTS FOR APP
    PAGINATION_LIMIT: 20,
}

export const FONTS = {
    REGULAR: 'Montserrat-Regular',
    BOLD: 'Montserrat-Bold',
    LIGHT: 'Montserrat-Light',
    ITALIC: 'Montserrat-Italic',
    LIGHT_ITALIC: 'Montserrat-LightItalic',
    SEMIBOLD_ITALIC: 'Montserrat-SemiBoldItalic',
    BLACK: 'Montserrat-Black',
    BLACK_ITALIC: 'Montserrat-BlackItalic',
    EXTRA_BOLD_ITALIC: 'Montserrat-ExtraBoldItalic',
    EXTRA_BOLD: 'Montserrat-ExtraBold',
    EXTRA_LIGHT: 'Montserrat-ExtraLight',
    EXTRA_LIGHT_ITALIC: 'Montserrat-ExtraLightItalic',
    BOLD_ITALIC: 'Montserrat-BoldItalic',
    MEDIUM: 'Montserrat-Medium',
};

export const COLORS = {
    // checkout link for more colors: https://facebook.github.io/react-native/docs/colors
    RED: 'rgb(255, 0, 0)',
    YELLOW: 'yellow',
    WHITE: 'rgba(255, 255, 255, 1)',
    BLACK: 'rgba(0, 0, 0, 1)',
    BUTTON_BG: '#464646',
    GRAYBLACK: '#A2A2A2',
    TRANSPARENT: 'rgba(255, 255, 255, 0)',  
    HEADER_BG: '#464646',
    PLACEHOLDER_COLOR: '#6E6E6E',
    SEPARATOR: '#E5E5E5',
    SCREEN_BG: '#FCFCFC',
    VIEW_BG: '#FFFFFF',
}

export const SCALE = {
    TITLE_TEXT_SIZE: 16,
    INPUT_TEXT_SIZE: 15,
    SUB_TEXT_SIZE: 14,
    CONTENT_TEXT_SIZE: 12,
    CONTAINER_PADDING: 16,
    SUB_CONTAINER_PADDING: 8
}

export const VALIDATION_CONST = {
    minPasswordLength: 6,
    minInputTextLength: 2,
    minPhoneLength: 8,
    minZipCodeLength: 5,
    maxPasswordLength: 16,
    maxNameLength: 64,
    maxPhoneLength: 15,
    maxZipCodeLength: 5
}