import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

class SignalRService {
  constructor(token) {
    this.connection = null;
    this.token = token;
  }

  startConnection = async () => {
    this.connection = new HubConnectionBuilder()
      .withUrl("https://localhost:7271/chat", {
        accessTokenFactory: () => this.token,
      })
      .configureLogging(LogLevel.Information)
      .build();

    await this.connection
      .start()
      .then(() => {
        console.log("SignalR connection started.");
      })
      .catch((error) => {
        console.error("Error starting SignalR connection:", error);
      });
  };

  registerReceiveMessageHandler = (callback) => {
    this.connection.on("ReceiveMessage", (userId, message) => {
      callback(userId, message);
    });
  };

  sendMessage = async (userId, message) => {
    await this.connection
      .invoke("SendMessageToAll", userId, message)
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };
}

export default SignalRService;
