const express = require("express"),
  cors = require("cors"),
  nodemailer = require("nodemailer"),
  { google } = require("googleapis"),
  App = express(),
  recipient = 'khonjelwayo@gmail.com';

App.use(cors({ origin: "http://localhost:4200" }));
App.use(express.json());
App.use((req, res, next) => {
 
  console.log(`Date: ${new Date()}`);
  console.log(`Request Method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  
  next();
});

// const oauth2Client = new google.auth.OAuth2(
//   "359523372765-gqfn020cpf118vm84ijbpf901rdsa41a.apps.googleusercontent.com", //client id
//   "KxJO_0x6nO2nWfHdGLzdrbSi", // client secret 
//   "https://developers.google.com/oauthplayground" //redirects uri
// );

// oauth2Client.setCredentials({
//   refresh_token: "1/2kzUOqXqujYVKxLT9hDO6QuCBfRWTHqWmXQ4dGmikho"
// });


App.post("/mail", (req, res) => {
  const message = req.body,
    emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (emailRegex.test(req.body.from_add) && req.body.text) {
    // sendEmail(message)
    //   .then(response => res.send(response))
    //   .catch(error => res.send(error));    
    res.send({
      message: 'message recieved'
    });

  } else {
    res.send({ error: 'invalid email/message is empty' });
  };
});

App.listen(3000, () => {
  console.log("server listening on http://localhost:3000 ");
});

function sendEmail(message) {

  let accessToken;

  oauth2Client.on('tokens', (tokens) => {
    accessToken = tokens.access_token;
  })

  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        clientId: '359523372765-gqfn020cpf118vm84ijbpf901rdsa41a.apps.googleusercontent.com',
        clientSecret: 'KxJO_0x6nO2nWfHdGLzdrbSi'
      }
    }, {
      from: `My Profile <${message.from_add}>`
    })

    transporter.verify().catch(err => reject(err));

    transporter.sendMail({
      to: `Sphamandla Khonjelwayo <${recipient}>`,
      sender: 'My Profile',
      replyTo: message.from_add,
      subject: message.subject,
      text: message.text,
      html: message.html,
      priority: 'high',
      date: new Date(),
      auth: {
        user: recipient,
        refreshToken: "1/2kzUOqXqujYVKxLT9hDO6QuCBfRWTHqWmXQ4dGmikho",
        accessToken: accessToken
      }
    }, (err, info) => {
      err ? reject(err) : resolve(info)
    })
  })
}