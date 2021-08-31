// This is your new function. To start, set the name and path on the left.

exports.handler = function(context, event, callback) {

    const response = new Twilio.Response();
      // Set the CORS headers to allow Flex to make an error-free HTTP request
      response.appendHeader('Access-Control-Allow-Origin', '*');
      response.appendHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
      response.appendHeader('Access-Control-Allow-Headers', 'Content-Type');
      
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(context.SENDGRID_API_KEY)
    const msg = {
      to: event.customerEmail, // Change to your recipient
      from: 'crocadopt@twildemo.one', // Change to your verified sender
      template_id: 'd-e9b28f2772184491a78dc542892e51a0', //template that needs to be sent
      "dynamic_template_data": {
        "firstName": event.firstName,
        "crocName": event.crocName
      }};
    
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent');
        
        if (event.sendMessage === true) {
            const client = context.getTwilioClient();
    
            client.messages
                .create({
                    body: 'Congratulations on your adoption of ' + event.crocName + '. Your croc is getting prepped for travel and you will get an update by SMS once it is on the move', 
                    from: '+61480094557', 
                    to: event.customerPhone})
                .then(message => {
                  console.log(message.sid)
                  response.appendHeader('Content-Type', 'application/json');
                  response.setBody({status: 'ok', message: message});
                  return callback(null, response);
                }).catch((error) => {
                   console.error(error);
                    return callback(error);
                    })
        } else {
            console.log("no sms sent");
            return callback(null, response);
        }
          
        })  .catch((error) => {
                console.error(error);
                return callback(error);
            })
        }
    