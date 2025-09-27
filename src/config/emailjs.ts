// EmailJS Configuration
// You need to replace these values with your actual EmailJS credentials
// Sign up at https://www.emailjs.com/ to get your credentials

export const emailjsConfig = {
  serviceId: 'your_service_id', // Replace with your EmailJS service ID
  templateId: 'your_template_id', // Replace with your EmailJS template ID
  publicKey: 'your_public_key' // Replace with your EmailJS public key
}

// Instructions to set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and log in
// 3. Create a new email service (Gmail, Outlook, etc.)
// 4. Create an email template with these variables:
//    - {{from_name}}
//    - {{from_email}}
//    - {{company}}
//    - {{phone}}
//    - {{service}}
//    - {{message}}
//    - {{to_email}}
// 5. Replace the values above with your actual credentials
// 6. Update the template to send emails to info@sfsbv.com
