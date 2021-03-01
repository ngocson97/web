// api user management
export const API_CREATE_USER_INDENTITY_OTP = 'api-gateway/user/v1.0/users/identities/passwords/otp';
export const API_CHECK_PROFILE = 'api-gateway/user/v1.0/users/simple-profiles';
export const API_AUTH_TOKEN = 'api-gateway/v1.0/user/oauth/token';
export const API_UPDATE_PROFILE_BUYER = 'api-gateway/user/v1.0/users/profiles/buyers';
export const API_CREATE_USER = 'api-gateway/user/v1.0/users';
export const API_ACTIVE_USER = 'api-gateway/user/v1.0/users/activations'
//Provider Profile
export const API_GET_PROFILE = 'api-gateway/user/v1.0/users/profiles';
export const API_CREATE_PROFILE = 'api-gateway/user/v1.0/users/profiles';
export const API_UPDATE_PROFILE_PROVIDER = 'api-gateway/user/v1.0/users/profiles/providers';
export const API_UPLOAD_PROFILE_FILES = 'api-gateway/user/v1.0/users/profiles/files';

export const API_GET_LICENSES = 'api-gateway/user/v1.0/users/licenses';
export const API_CREATE_LICENSES = 'api-gateway/user/v1.0/users/licenses';
export const API_DELETE_LICENSES = 'api-gateway/user/v1.0/users/licenses';
export const API_GET_VEHICLES = 'api-gateway/user/v1.0/users/vehicles';
export const API_CREATE_VEHICLES = 'api-gateway/user/v1.0/users/vehicles';
export const API_DELETE_VEHICLES = 'api-gateway/user/v1.0/users/vehicles';
export const API_GET_INSURANCES = 'api-gateway/user/v1.0/users/insurances';
export const API_CREATE_INSURANCES = 'api-gateway/user/v1.0/users/insurances';
export const API_DELETE_INSURANCES = 'api-gateway/user/v1.0/users/insurances';
export const API_GET_SKILL = 'api-gateway/user/v1.0/users/skills';
export const API_CREATE_SKILL = 'api-gateway/user/v1.0/users/skills';
export const API_DELETE_SKILL = 'api-gateway/user/v1.0/users/skills';
export const API_CREATE_USER_PREFERECE = 'api-gateway/user/v1.0/users/preferences';
export const API_CREATE_USER_INDENTITY = 'api-gateway/user/v1.0/users/identities';
export const API_GET_PUBLIC_PROFILE_USER = 'api-gateway/user/v1.0/users/';
export const API_GET_PL_PROFILE = 'api-gateway/user/v1.0/users/public-profiles'

// reviews 

export const API_CREATE_REVIEWS = 'api-gateway/user/v1.0/users/reviews';
export const API_GET_REVIEWS_DEALS = 'api-gateway/user/v1.0/users/reviews/deals/';
export const API_GET_REVIEW_USER = 'api-gateway/user/v1.0/users/';


//Credit Card
export const API_GET_CARDS = 'api-gateway/payment/v1.0/cards';
export const API_CREATE_CARDS = 'api-gateway/payment/v1.0/cards';
export const API_DELETE_CARD = 'api-gateway/payment/v1.0/cards/';
export const API_CARD_SETUP = 'api-gateway/payment/v1.0/card-setups';
export const API_PAY_BILL = 'api-gateway/payment/v1.0/bills/'


// Bank
export const API_BANK_SETUP = 'api-gateway/payment/v1.0/account-setups';
export const API_GET_BANKS = 'api-gateway/payment/v1.0/connect-accounts';
export const API_CREATE_BANK = 'api-gateway/payment/v1.0/connect-accounts/banks';
export const API_DELETE_BANK = 'api-gateway/payment/v1.0/connect-accounts/banks/'
export const API_CAPTURE_PAYMENT = 'api-gateway/payment/v1.0/bills/'


//address 
export const API_UPDATE_ADDRESS = 'api-gateway/user/v1.0/users/address/';
export const API_DELETE_ADDRESS = 'api-gateway/user/v1.0/users/address/';
export const API_GET_ADDRESS = 'api-gateway/user/v1.0/users/address';
export const API_CREATE_ADDRESS = 'api-gateway/user/v1.0/users/address';
export const API_DEFAULT_ADDRESS = 'api-gateway/user/v1.0/users/address/'

export const API_REFRESH_TOKEN = 'api-gateway/v1.0/user/oauth/token';
export const API_FORGOT_PASSWORD = 'api-gateway/user/v1.0/users/identities/passwords';

// api otp management
export const API_VERYFI_OTP_CODE = 'api-gateway/otp-management/v1.0/otp/verification'
export const API_CREATE_OTP = 'api-gateway/otp-management/v1.0/otp';

// api deal 

export const API_CREATE_DEAL = 'api-gateway/deal/v1.0/deals';
export const API_QUERY_BOOKING = 'api-gateway/deal/v1.0/deals/books'
export const API_GET_BOOKINGS = 'api-gateway/deal/v1.0/deals/'
export const API_UPDATE_BOOKINGS_STATUS = 'api-gateway/deal/v1.0/deals/'
export const API_CANCEL_DEAL = 'api-gateway/deal/v1.0/deals/'
export const API_DELETE_SLOT_ID = 'api-gateway/deal/v1.0/deals/'
export const API_GET_DEAL_DETAIL_REP = 'api-gateway/deal/v1.0/deals/rep/'

// Deal
export const API_DEAL = 'api-gateway/deal/v1.0/deals/'
export const API_GET_DEAL_DETAIL = 'api-gateway/deal/v1.0/deals/';
export const API_GET_DEAL = 'api-gateway/search/deals';
export const API_UPLOAD_FILE_DEAL = 'api-gateway/deal/v1.0/deals/';
export const API_BOOK_DEAL = 'api-gateway/deal/v1.0/deals/';
export const API_SEARCH_DEAL = 'api-gateway/search/deals/';
export const API_GET_USER_PROFILE = 'api-gateway/user/v1.0/users/public-profiles';
export const API_VERIFIEMAIL_CONFIRM = 'api-gateway/user/v1.0/users/email-verifications/confirm';
export const API_VERIFIEMAIL_REQUEST = 'api-gateway/user/v1.0/users/email-verifications/request';

// public comment 

export const API_CREATE_COMMENT = 'api-gateway/ticket/v1.0/comments';
export const API_GET_COMMENT = 'api-gateway/ticket/v1.0/comments';
export const API_UPDATE_COMMENT = 'api-gateway/ticket/v1.0/comments/';
export const API_DELETE_COMMENT = 'api-gateway/ticket/v1.0/comments/';

export const API_CHATS = 'api-gateway/ticket/v1.0/chats'

// schedule 

export const API_GET_EVENT = "api-gateway/schedule/v1.0/events";
// interviews 

export const API_INTERVIEWS = 'api-gateway/user/v1.0/users/interviews'
export const API_UPDATE_NEW_PASSWORD = 'api-gateway/user/v1.0/users/identities'


// business 
export const API_BUSINESS_ACCOUNT = 'api-gateway/user/v1.0/users/businesses';
export const API_BUSINESS_FILE = "api-gateway/user/v1.0/users/businesses/files";
export const API_BUSINESS_PUBLIC_PROLIES = 'api-gateway/user/v1.0/users/businesses/public-profiles';
export const API_GET_MY_BUSINESS = 'api-gateway/user/v1.0/users/my-businesses';
export const API_GET_BUSINESS_PROFILE_PUBLIC = 'api-gateway/user/v1.0/users/businesses/public-profiles'

export const API_REFERRALS_USER = 'api-gateway/user/v1.0/users/referrals';
export const API_GET_REFERRALS_BY_USER = 'api-gateway/user/v1.0/users/referrals/from';
export const API_GET_MY_REFERRALS = 'api-gateway/user/v1.0/users/referrals/to';


// borderFit: 'overflow'
export const API_CREATE_JOB = 'api-gateway/job/v1.0/jobs'
export const API_UPLOAD_FILE_JOB = 'api-gateway/job/v1.0/jobs'
export const API_JOB = 'api-gateway/job/v1.0/jobs/'


