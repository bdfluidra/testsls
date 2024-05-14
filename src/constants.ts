export namespace Constants {
    export enum Subscriptions {
        REWARDS = 'Rewards',
        ION = 'ION',
        PROMOTIONS = 'Promotions'
    }

    export enum EntityTypes {
        USER = 'user',
        BUSINESS = 'business',
        SERVICE = 'service',
        USERTOKEN = 'userToken',
        BUSINESSUSER = 'businessToUser',
        BUSINESSOWNER = 'user#owner'
    }

    export enum GSINames {
        CUSTOMERNUMBERGSI = 'customerNumberGSI',
        BUSINESSNAMEGSI = 'businessNameGSI',
        OWNEREMAILGSI = 'ownerEmailGSI',
        USERNAMEGSI = 'userNameGSI',
        FIRST_NAME_GSI = 'firstNameGSI',
        LAST_NAME_GSI = 'lastNameGSI',
        BUSINESS_OWNER_GSI = 'businessOwnerGSI'
    }
    export enum CustomerType {
        PROEDGE = 'proedge',
        RETAILSELECT = 'retail select',
        RETAILSELECTSTAR = 'retail select star',
        SERVICEPRO = 'servicepro',
        BASEREWARDS = 'base rewards',
        SALESREP = 'sales rep'
    }

    export const METADATA = 'metadata';

    export enum Parameter_Store_Keys {
        ION_DASHBOARD_V2 = '/platform/fluidrapro/ion/v2/dashboard',
        REWARDS_DASHBOARD_V1 = '/platform/fluidrapro/rewards/v1/dashboard',
        PERKS_DASHBOARD_V1 = '/platform/fluidrapro/perks/v1/dashboard',
        ION_SUBSCRIBERS_V2 = '/platform/fluidrapro/ion/v2/subscribers',
        ION_USERS_V2 = '/platform/fluidrapro/ion/v2/users',
        REWARDS_MAINACCOUNT_V1 = '/platform/fluidrapro/rewards/v1/mainaccount',
        REWARDS_SUBACCOUNT_V1 = '/platform/fluidrapro/rewards/v1/subaccount',
        RESET_PASSWORD_URL = '/platform/fluidrapro/auth/endpoint/resetpassword',
        BUCKET_NAME = '/platform/fluidrapro/bucketname',
        SAML_TOKEN_V1 = '/platform/fluidrapro/samltoken/v1',
        ION_USER_STATUS = '/platform/fluidrapro/ion/v2/updateStatus'
    }

    export enum Secret_Manager_keys {
        FLUIDRAPRO_USERTOKEN_KEY = 'Fluidrapro_Usertoken_Key'
    }
    export enum SFTP_Keys {
        SFTP_USERNAME_v1 = '/platform/fluidrapro/perks/v1/username',
        SFTP_PASSWORD_v1 = '/platform/fluidrapro/perks/v1/password',
        SFTP_HOST_v1 = '/platform/fluidrapro/perks/v1/host',
    }
}
