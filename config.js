export default {
    _secret: Buffer.from('a2hhbmhkYWljYQ==', 'base64').toString(),

    mailer: {
        service: 'gmail',
        auth: {
            user: 'webtruyen99@gmail.com',
            pass: 'zbaghxiszytmarwh'
        }
    },
    website: {
        port: 5000,
        domain: `http://localhost:5000`,
    }
}