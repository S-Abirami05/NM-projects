Email Reminder System

A simple **Email Reminder Web App** built with **HTML**, **CSS**, and **JavaScript**, using [EmailJS](https://www.emailjs.com/) to send reminder emails directly from the browser — no backend or server required.

 Features

Send scheduled reminder emails  
User chooses date and time for reminders  
Clean and responsive interface  
Uses EmailJS for secure, server-less email sending  
Lightweight — runs entirely in the browser  

 Folder Structure

email-reminder/
│
├── index.html # Main webpage
├── style.css # Stylesheet
└── script.js # JavaScript logic

yaml

 Technologies Used

| Technology | Purpose |
|-------------|----------|
| **HTML5** | Structure and layout |
| **CSS3** | Styling and design |
| **JavaScript (ES6)** | Logic and scheduling |
| **[EmailJS](https://www.emailjs.com/)** | Sending emails directly from client-side |

---

Setup Instructions

1 Clone the Repository

bash
git clone https://github.com/<your-username>/email-reminder.git
cd email-reminder
2️ Set Up EmailJS
Go to https://www.emailjs.com

Sign up (free account)

Create a new Email Service (e.g., Gmail)

Create a new Email Template with the following variables:

css
Copy code
To: {{to_email}}
Message: {{message}}
Copy your:

Service ID

Template ID

Public Key

Update JavaScript Configuration
Open script.js and replace:

js
emailjs.init("YOUR_PUBLIC_KEY");
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams);
with your actual EmailJS credentials.

Run the Project
Simply open index.html in your web browser

Fill in:

Recipient Email

Message

Reminder Date & Time

Click “Set Reminder”

The app will wait until the chosen time and send the email automatically via EmailJS.

How It Works
The user fills in the form with email details and a date/time.

The app calculates how long to wait (setTimeout) until that time.

When the time is reached, it sends the email using EmailJS API.

Future Improvements
Add countdown timer until the reminder

Store reminders in local storage

Add email templates and custom subjects

Use a backend (Node.js + MongoDB) for persistent scheduling

Contributing
Contributions are welcome!
If you'd like to improve the project:

Fork the repo

Create a new branch (feature-new)

Commit your changes

Submit a Pull Request

License
This project is licensed under the MIT License.
You are free to use, modify, and distribute it.

---

Would you like me to add a **“Live Demo”** section (so you can deploy it easily with GitHub Pages)?

