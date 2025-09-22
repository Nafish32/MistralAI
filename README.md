# Mistral AI Chat Application 🤖

A full-stack chat application powered by Mistral AI, featuring a Spring Boot backend and React frontend for seamless AI conversations.

![Mistral Chat Interface](https://github.com/user-attachments/assets/c333fb85-bebc-409b-8ff1-c67104fb9c45)

## 🌟 Features

- **Real-time Chat Interface**: Clean, responsive React-based chat UI
- **Mistral AI Integration**: Powered by Mistral AI's advanced language model
- **RESTful API**: Spring Boot backend with clean API endpoints
- **Cross-Origin Support**: Frontend and backend can run on different ports
- **Error Handling**: Comprehensive error handling and user feedback
- **Auto-scroll**: Messages automatically scroll to the latest response
- **Loading States**: Visual feedback during AI response generation

## 🏗️ Architecture

```
┌─────────────────┐    HTTP/REST    ┌─────────────────┐    API Call    ┌─────────────────┐
│                 │    Requests     │                 │                │                 │
│  React Frontend │◄──────────────► │ Spring Boot     │──────────────► │   Mistral AI    │
│   (Port 3000)   │                 │ Backend         │                │     API         │
│                 │                 │ (Port 8085)     │                │                 │
└─────────────────┘                 └─────────────────┘                └─────────────────┘
```

## 🛠️ Technology Stack

**Backend:**
- Java 17
- Spring Boot 3.5.0
- Spring AI 1.0.0
- Mistral AI Integration
- Maven

**Frontend:**
- React 19.1.0
- Axios for HTTP requests
- CSS3 for styling
- npm/Create React App

**Development Tools:**
- Maven Wrapper
- Node.js & npm
- Hot reload for development

## 📋 Prerequisites

- **Java 17** or higher
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Maven** (for building the backend)
- **Mistral AI API Key** (required for AI functionality)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/Nafish32/MistralAI.git
cd MistralAI
```

### 2. Environment Setup

Create environment variable for Mistral AI API key:

**Linux/Mac:**
```bash
export MISTRALAI_RAIYAN=your_mistral_ai_api_key_here
```

**Windows:**
```cmd
set MISTRALAI_RAIYAN=your_mistral_ai_api_key_here
```

### Getting Your Mistral AI API Key

1. Visit [Mistral AI Console](https://console.mistral.ai/)
2. Create an account or sign in
3. Navigate to the API Keys section
4. Generate a new API key
5. Copy the key and set it as an environment variable (see step 2 above)

### 3. Backend Setup (Spring Boot)

```bash
# Build and run the backend
./mvnw clean install
./mvnw spring-boot:run
```

Or on Windows:
```cmd
mvnw.cmd clean install
mvnw.cmd spring-boot:run
```

The backend will start on `http://localhost:8085`

### 4. Frontend Setup (React)

```bash
# Navigate to frontend directory
cd api_call

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend will start on `http://localhost:3000`

### 5. Access the Application

Open your browser and navigate to `http://localhost:3000` to start chatting with Mistral AI!

## 🔧 Configuration

### Backend Configuration

The backend configuration is located in `src/main/resources/application.properties`:

```properties
spring.application.name=mistral backend
spring.ai.mistralai.api-key=${MISTRALAI_RAIYAN}
server.port=8085
```

### Frontend Configuration

The frontend connects to the backend via:
- **Backend URL**: `http://localhost:8085`
- **API Endpoint**: `/api/mistralai/{message}`

## 📚 API Documentation

### Chat Endpoint

**GET** `/api/mistralai/{message}`

Sends a message to Mistral AI and returns the response.

#### Parameters
- `message` (path parameter): The user's message to send to Mistral AI

#### Response
- **Content-Type**: `text/plain`
- **Status Code**: 200 (Success)
- **Body**: The AI's response as a string

#### Example Request
```bash
curl "http://localhost:8085/api/mistralai/Hello%20there"
```

#### Example Response
```
Hello! How can I help you today?
```

## 📁 Project Structure

```
MistralAI/
├── src/                                    # Backend (Spring Boot)
│   ├── main/
│   │   ├── java/
│   │   │   └── com/example/mistral_backend/
│   │   │       ├── MistralBackendApplication.java    # Main application class
│   │   │       └── MistralController.java            # REST API controller
│   │   └── resources/
│   │       └── application.properties                # Backend configuration
│   └── test/                                        # Backend tests
├── api_call/                               # Frontend (React)
│   ├── public/                            # Static assets
│   ├── src/
│   │   ├── App.js                         # Main React component
│   │   ├── App.css                        # Styling
│   │   └── index.js                       # React entry point
│   ├── package.json                       # Frontend dependencies
│   └── README.md                          # Create React App documentation
├── pom.xml                                # Maven configuration
├── mvnw, mvnw.cmd                         # Maven wrapper scripts
└── README.md                              # This file
```

## 🎨 Usage Examples

### Basic Chat
1. Start both backend and frontend servers
2. Open the application in your browser
3. Type your message in the input field
4. Press "Send" or hit Enter
5. Wait for Mistral AI's response

### Example Conversations
- **Question**: "Explain quantum computing in simple terms"
- **Question**: "Write a Python function to sort a list"
- **Question**: "What are the benefits of renewable energy?"

## 🔨 Development

### Building for Production

**Backend:**
```bash
./mvnw clean package
java -jar target/mistral_backend-0.0.1-SNAPSHOT.jar
```

**Frontend:**
```bash
cd api_call
npm run build
```

### Running Tests

**Backend:**
```bash
./mvnw test
```

**Frontend:**
```bash
cd api_call
npm test
```

## 🐛 Troubleshooting

### Common Issues

1. **Backend fails to start**
   - Ensure Java 17+ is installed: `java -version`
   - Check if Mistral AI API key is set: `echo $MISTRALAI_RAIYAN`
   - Verify port 8085 is not in use

2. **Frontend can't connect to backend**
   - Ensure backend is running on port 8085
   - Check if CORS is properly configured (it should be with `@CrossOrigin("*")`)
   - Verify the API URL in App.js matches your backend

3. **"No response received from server" error**
   - Backend is not running - start it with `./mvnw spring-boot:run`
   - Network connectivity issues
   - Firewall blocking the connection

4. **Mistral AI API errors**
   - Invalid API key - check your `MISTRALAI_RAIYAN` environment variable
   - API rate limits reached
   - Network issues connecting to Mistral AI

### Environment Variables

Make sure to set the required environment variable:
```bash
# Linux/Mac
export MISTRALAI_RAIYAN=your_actual_api_key

# Windows
set MISTRALAI_RAIYAN=your_actual_api_key
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- [Mistral AI Documentation](https://docs.mistral.ai/)
- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [React Documentation](https://reactjs.org/)
- [Spring AI Documentation](https://docs.spring.io/spring-ai/reference/)

## 📞 Support

If you encounter any issues or have questions, please:
1. Check the troubleshooting section above
2. Search existing issues in the repository
3. Create a new issue with detailed information about your problem

---

**Happy chatting with Mistral AI! 🚀**