// EmailJS Configuration
// You need to replace these values with your actual EmailJS credentials
// Sign up at https://www.emailjs.com/ to get your credentials

// EmailJS Configuration using environment variables
export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_w45jced',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_73a6w5c',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '4rfLEJvas-uG2uode'
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
