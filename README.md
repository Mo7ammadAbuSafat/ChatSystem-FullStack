# Real Chat Website - .NET Core API & ReactJS

![Let's Chat-1](https://github.com/Mo7ammadAbuSafat/ChatSystem-FullStack/assets/103439731/208a5010-0d6a-4e93-8172-117c75878a73)


## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [SignalR Library](#signalr-library)
- [Layered Architecture](#layered-architecture)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Description

Real Chat Website is a modern chat application that allows users to have real-time conversations with each other. The project is built using .NET Core for the backend API and ReactJS for the frontend.

The main focus of this project is to demonstrate the integration of the SignalR library, which enables real-time communication between clients and the server. Users can register, log in, send and receive messages in real-time, and more.

## Technologies Used

### Backend (.NET Core)

- SignalR
- AutoMapper
- File Handling
- Cloudinary (Cloud Service)
- RESTful API

### Database

The project uses SQL Server as the database to store user information, chat messages, and related data. SQL Server provides robust data management capabilities and ensures data integrity.
Additionally, the project utilizes Cloudinary, a cloud service, to handle user profile photos. Cloudinary allows users to upload, store, and retrieve images easily.

### Frontend (ReactJS)

- Material UI
- Microsoft SignalR

## Features



### Authentication and User Profile

1. **User Registration and Login**: Users can create accounts and log in to access the chat functionality.

2. **Update User Information**: Users can update their profile information, including profile photos and passwords.

3. **User Status**: Users can see the online status of other users, indicating if they are currently online or not.

### Search
1. **Search People**: Users can search for other people based on text input, with backend search functionality.
2. **View People Information**: Users can view information about other registered users.

### Chat Functionality

1. **Messages History**: The chat stores message history with pagination, allowing users to scroll through past messages.

2. **Real-Time Chatting**: Users can send and receive messages in real-time using SignalR.
3. **Recent Chats**: Users can see a list of recent chats with the last message displayed for each one.

4. **Message Notifications**: Users receive notifications for new messages when the chat is not currently selected.

### User Interface

1. **Dark Mode and Light Mode**: Users can switch between dark and light themes based on their preference.

2. **Responsive Design**: The website is designed to be responsive and work smoothly on various screen sizes.






## SignalR Library

SignalR is a real-time communication library for .NET that enables real-time functionality for web applications. It allows server-side code to push content to connected clients instantly. In this project, SignalR is utilized to achieve real-time chatting, enabling users to exchange messages seamlessly.

For more information about SignalR, visit the [SignalR documentation](https://docs.microsoft.com/en-us/aspnet/core/signalr/introduction).

## Layered Architecture

The .NET backend of this project is designed using a layered architecture to promote separation of concerns and maintainability. The architecture typically consists of the following layers:

- Presentation Layer
- Business Layer
- Persistence Layer

The layered architecture helps organize the codebase and makes it easier to maintain and extend the project.

## Installation

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/yourusername/real-chat-website.git`
2. Navigate to the project directory for both the backend and frontend.
3. Install backend dependencies: `dotnet restore`
4. Start the backend server: `dotnet run`
5. Install frontend dependencies: `npm install`
6. Start the frontend development server: `npm start`
7. Open your browser and go to `http://localhost:3000` to access the website.


## Contributing

Contributions to this project are welcome! If you find any bugs or have suggestions for improvement, please feel free to open an issue or submit a pull request.

1. Fork the project.
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).


## Contact

If you have any questions or feedback regarding this project, you can reach me at:
- Email: mo7ammad.abusafat@gmail.com
- LinkedIn: https://www.linkedin.com/in/mohammad-abusafat/
