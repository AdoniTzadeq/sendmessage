
    const nodemailer = require('nodemailer');
  

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {

        user: 'neenamathew217@gmail.com',
        pass: 'occxtniydnhugmqf'
        
    }
});

let mailOptions = {
    from: 'neenamathew217@gmail.com',
  to: 'neenakulathinkal@gmail.com',
   
    subject: 'Test Email',
    text: 'Hi, hoper you are doing well'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
