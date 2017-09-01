let   SECRET
let   SECRET_ENCRYPT
let   API_PORT     
let   API_HOST
let   MONGO_HOST
let   MONGO_DB
let   MONGO_PORT
let   MONGO_USER
let   MONGO_PASSWORD
let   MAIL
let   MAIL_NAME
let   MAIL_PSW
let   MAIL_FROM
const env = process.env.NODE_ENV || 'development'

switch (env) {
  case 'production':
    SECRET = process.env.SECRET
    SECRET_ENCRYPT = process.env.SECRET_ENCRYPT

    API_PORT = process.env.API_PORT
    API_HOST = process.env.API_HOST
    
    MONGO_HOST = process.env.MONGO_HOST
    MONGO_DB = process.env.MONGO_DB
    MONGO_PORT = process.env.MONGO_PORT
    MONGO_USER = process.env.MONGO_USER
    MONGO_PASSWORD = process.env.MONGO_PASSWORD

    MAIL = process.env.MAIL
    MAIL_NAME = process.env.MAIL_NAME
    MAIL_PSW = process.env.MAIL_PSW
    MAIL_FROM = process.env.MAIL_FROM
    break

  case 'development':
    SECRET = 'claveultrasecreta'
    SECRET_ENCRYPT = 'apgca'

    API_PORT = '5000'
    API_HOST = 'http://localhost'

    MONGO_HOST = '//localhost'
    MONGO_DB = 'todocampo'
    MONGO_PORT = '27017'
    MONGO_USER = ''
    MONGO_PASSWORD = ''

    MAIL = ''
    MAIL_NAME = ''
    MAIL_PSW = ''
    MAIL_FROM = ''
    break
  default:
    break
}

let config = {
        secret: SECRET,
        secretEncrypt:SECRET_ENCRYPT,
        apiPort:API_PORT,
        apiHost:API_HOST,
        mongoHost:MONGO_HOST,
        mongoDb:MONGO_DB,
        mongoPort:MONGO_PORT,
        mongoUser:MONGO_USER,
        mongoPwd:MONGO_PASSWORD,
        mail:MAIL,
        mailName:MAIL_NAME,
        mailPsw:MAIL_PSW,
        mailFrom:MAIL_FROM
}

exports["default"] = config;
