# Introduction

Welcome to Qencode Login Interface project! This implementation aims to provide an engaging and efficient login experience, built using React and integrated with an Authentication API. Our goal is to create a visually appealing and functional interface, ensuring seamless form submission, input validation, and interaction with API endpoints.

[DEMO](https://main--qencode-access-portal.netlify.app/)
[TASK](https://drive.google.com/file/d/1X0sDS_R9dLS26V55IJFRdWMRumKUE2gj/view)
[DESIGN](https://www.figma.com/file/jyCTDwiw4IwadVfae9FMu8/Qencode-Frontend-Developer-Test?type=design&node-id=1-701&mode=design&t=mpRCaO73ZtGGcLSc-0)

## Features Overview

### First Page

- Social Login Integration: Future ability to log in using Google or GitHub accounts.
- Login Form: Input fields for email and password. Password field and forgot password link become enabled only after email validation.
- Forgot Password Link: Allows users to reset their password by navigating to a new page.
- Login to Company Button: Enables users to log in specifically to the company's system.
- Company Registration Link: Directs users to the company registration page.

### Second Page

- Reset Password Form: Allows users to input their email address. Upon valid submission, users proceed to set a new password.
- Action Buttons: Submit sends a request to the server, while Cancel returns users to the login page.

### Third Page

- Password Reset Inputs: Fields for new password and confirmation, with validation to ensure they match.
- Submit Button: Sends a request to the server to reset the password.
- Success/Failure Feedback: Displays messages accordingly after successful or unsuccessful password reset attempts.

### Error Messages and Notifications

- Input Validation Errors: Inform users of input mistakes or invalid data.
- Global Notifications: Implemented using Notiflix library to provide feedback on success or failure.

### Password Visibility

- Toggle Icon: Each password input field includes an icon to show or hide its value for enhanced user experience.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Vasyl-Pavlenko/qencode-tt
   cd qencode-tt
   npm install
   npm run dev
   ```

2. Open your browser and go to http://localhost:5173

### Technologies Used

- React
- React hook form
- @Hookform/Resolvers
- React Router DOM
- Redux Toolkit
- Styled Components
- Axios for API requests
- Yup
- Notiflix for displaying notifications

### Happy coding

I hope you enjoy exploring and contributing to my project. If you have any questions or feedback, feel free to reach out. Let's build amazing experiences together!
