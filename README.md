# 📧 Newsletter Signup Web Application

This project is a web application that allows users to sign up for a newsletter using Mailchimp. It uses Node.js with the Express framework to handle server-side operations and interacts with the Mailchimp API to manage email subscriptions.

## 🛠 Technologies Used

- **Backend**: Node.js with Express
- **Package Management**: npm
- **API Integration**: Mailchimp API
- **Environment Variables**: dotenv

## How Does it Work?

### User Interaction

1. Users visit the `/` route and see the `signup.html` form.
2. They submit their details (first name, last name, email) through the form.

### Server-Side Handling

1. The data is sent to the server via a POST request to `/`.
2. The server processes the data, formats it according to Mailchimp's API requirements, and makes a POST request to Mailchimp.

### API Communication

- The server sends the formatted data to Mailchimp’s API endpoint to add the user to the newsletter list.
- Based on the response, the server directs the user to either a success or failure page.

### Error Handling

- If the API call fails, users are redirected to `failure.html`.
- If successful, they see `success.html`.

## 📋 Installation Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## 📝 Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/anshikavermag/pulse-and-paper-mynewsletter.git
    cd pulse-and-paper-mynewsletter
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up your `.env` file:**

    ```plaintext
    API_KEY = your_mailchimp_api_key
    LIST_ID = your_mailchimp_list_id
    DATACENTER = your_mailchimp_datacenter
    ```

4. **Run the application:**

    ```bash
    node app.js
    ```

## 🔒 Environment Variables

The project uses a `.env` file to manage sensitive data. The required variables are:

- `API_KEY`: Your Mailchimp API key.
- `LIST_ID`: Your Mailchimp List ID.
- `DATACENTER`: The data center specific to your Mailchimp account (e.g., us14).

## 🚀 Deployment

Instructions for deploying the application (e.g., using Heroku, Netlify, etc.) can be added here.

## 🛡 Security Considerations

- **API Keys**: Managed and secured using `.env`.
- **.gitignore**: Ensures that `node_modules/` and `.env` files are not pushed to the repository.

## 📚 Acknowledgements

Inspired by the Web Development Bootcamp by [@Angela Yu](https://github.com/angelabauer).



Made with ❤️ by [Anshika Verma](https://github.com/anshikavermag).
