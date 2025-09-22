# Mistral AI Chat Application

A full-stack chat application that integrates with Mistral AI's language model, featuring a Spring Boot backend and React frontend.

## 🚀 Features

- **AI-Powered Chat**: Real-time conversation with Mistral AI
- **Modern UI**: Clean and responsive React-based chat interface
- **RESTful API**: Spring Boot backend with cross-origin support
- **Real-time Responses**: Instant AI responses through HTTP API
- **Error Handling**: Comprehensive error handling and user feedback
- **Auto-scroll**: Chat automatically scrolls to show latest messages

## 🏗️ Architecture

```
├── Backend (Spring Boot)
│   ├── REST API endpoint: /api/mistralai/{message}
│   ├── Mistral AI integration
│   └── CORS enabled for frontend communication
│
└── Frontend (React)
    ├── Chat interface
    ├── Message history
    └── Loading states and error handling
```

## 🛠️ Tech Stack

### Backend
- **Java 17**
- **Spring Boot 3.5.0**
- **Spring AI 1.0.0** (Mistral AI integration)
- **Maven** for dependency management

### Frontend
- **React 19.1.0**
- **Axios** for HTTP requests
- **Modern JavaScript (ES6+)**

## 📋 Prerequisites

- Java 17 or higher
- Node.js and npm
- Mistral AI API key
- Maven (or use included wrapper)

## ⚙️ Setup Instructions

### 1. Environment Configuration

Create environment variable for Mistral AI API key:
```bash
# Windows
set MISTRALAI_RAIYAN=your_mistral_ai_api_key_here

# Linux/Mac
export MISTRALAI_RAIYAN=your_mistral_ai_api_key_here
```

### 2. Backend Setup

Navigate to the project root directory:
```bash
cd "K:\js first try\java\mistral backend"
```

Install dependencies and run the backend:
```bash
# Using Maven wrapper (recommended)
./mvnw spring-boot:run

# Or using installed Maven
mvn spring-boot:run
```

The backend will start on `http://localhost:8085`

### 3. Frontend Setup

Navigate to the frontend directory:
```bash
cd api_call
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm start
```

The frontend will start on `http://localhost:3000`

## 🔧 Configuration

### Backend Configuration (`application.properties`)
```properties
spring.application.name=mistral backend
spring.ai.mistralai.api-key=${MISTRALAI_RAIYAN}
server.port=8085
```

### Frontend Configuration
The frontend is configured to make requests to `http://localhost:8085/api/mistralai/`

## 📡 API Endpoints

### Chat with Mistral AI
- **Endpoint**: `GET /api/mistralai/{message}`
- **Description**: Send a message to Mistral AI and get a response
- **Parameters**: 
  - `message` (path variable): The message to send to the AI
- **Response**: Plain text response from Mistral AI
- **Example**: `GET http://localhost:8085/api/mistralai/Hello, how are you?`

## 🎯 Usage

1. **Start the Backend**: Run the Spring Boot application
2. **Start the Frontend**: Run the React development server
3. **Open Browser**: Navigate to `http://localhost:3000`
4. **Start Chatting**: Type your message and press Enter or click Send
5. **View Responses**: AI responses will appear in the chat interface

## 🧪 Testing

### Backend Testing
```bash
# Run all tests
./mvnw test

# Run specific test class
./mvnw test -Dtest=MistralBackendApplicationTests
```

### Frontend Testing
```bash
cd api_call
npm test
```

## 🚀 Building for Production

### Backend
```bash
./mvnw clean package
java -jar target/mistral_backend-0.0.1-SNAPSHOT.jar
```

### Frontend
```bash
cd api_call
npm run build
```

## 🔧 Development

### Project Structure
```
mistral backend/
├── src/main/java/com/example/mistral_backend/
│   ├── MistralBackendApplication.java    # Main application class
│   └── MistralController.java            # REST controller
├── src/main/resources/
│   └── application.properties            # Configuration
├── api_call/                             # React frontend
│   ├── src/
│   │   ├── App.js                        # Main React component
│   │   └── App.css                       # Styling
│   └── package.json                      # Frontend dependencies
└── pom.xml                               # Maven configuration
```

## 🐛 Troubleshooting

### Common Issues

1. **Backend fails to start**
   - Ensure Java 17+ is installed
   - Verify Mistral AI API key is set correctly
   - Check if port 8085 is available

2. **Frontend can't connect to backend**
   - Ensure backend is running on port 8085
   - Check CORS configuration
   - Verify API endpoint URLs

3. **Mistral AI API errors**
   - Verify API key is valid and active
   - Check internet connectivity
   - Review Mistral AI usage limits

## 📝 License

This project is for educational/development purposes. Please ensure you comply with Mistral AI's terms of service when using their API.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For issues and questions:
- Check the troubleshooting section
- Review Spring AI documentation
- Check Mistral AI API documentation
- Open an issue in the repository

---

**Note**: Remember to keep your Mistral AI API key secure and never commit it to version control.
