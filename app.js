const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const https = require('https');
require('dotenv').config();


const app = express();

app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function(req, res){
    res.sendFile(__dirname + "/signup.html")
})

app.post('/', function(req, res){
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;

    console.log(firstName, lastName, email);

    let data = {
        members: [
            {email_address: email,
            status: 'subscribed',
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }}
        ]
    };

    let jsonData = JSON.stringify(data);


    

    let options = {
        url: `https://${process.env.MAILCHIMP_DATA_CENTER}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}`,
        method: 'POST',
        headers: {
            "Authorization": `auth ${process.env.MAILCHIMP_API_KEY}`
        },
        body: jsonData
    };
    


    request(options, function(error, response, body){
        if(error){
            console.log(error)
            res.sendFile(__dirname + '/failure.html')
        }else{
            console.log(response.statusCode);
            if(response.statusCode === 200){
                res.sendFile(__dirname + '/success.html')
            }else{
                res.sendFile(__dirname + '/failure.html')
            }
        }
    })
})


app.post('/failure', function(req, res){
    res.redirect('/');
})

app.listen(process.env.PORT || 5000 , function(){
    console.log('server is running on port 5000');
})

