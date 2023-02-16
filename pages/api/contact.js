import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SGMAIL_API)

export default async function handler(req, res){

    const newEmail = req.body;
    console.log(newEmail)
    await sgMail.send({
        to: 'contact@gopalbhattarai.com.np',
        from: 'contact@gopalbhattarai.com.np',
        subject: newEmail.name,
        text: newEmail.email + '\n\n' + newEmail.message
    })
    res.status(200).json({'status':'Email sent successfully!'})

}