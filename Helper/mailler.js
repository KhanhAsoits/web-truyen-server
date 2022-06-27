import nodeMailer from 'nodemailer'
import config from "../config.js";

export const sendMail = async (to, body, title) => {
    let mailer = nodeMailer.createTransport(config.mailer)
    let mailOptions = {
        from: config.mailer.auth.user,
        to: (to?.length > 0 && Array.isArray(to)) ? to.join(',') : to,
        subject: title,
        html: body
    }
    await mailer.sendMail(mailOptions, (err, info) => {
        if (err){
            console.log(err)
        }else{
            console.log('Mail sent : ' , info.response)
        }
    })
}