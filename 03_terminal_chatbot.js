import readline from "readline"
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { SystemMessage, AIMessage, HumanMessage } from "@langchain/core/messages";
import 'dotenv/config'


const model = new ChatGoogleGenerativeAI({
model: "gemini-2.0-flash",
// randomness of output: 0 low and 2 is high 
temperature:0,
// changed env keys of API
apiKey: process.env.GOOGLE_GEMINI_API_KEY,
})


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Store conversation history here
const messages = [
  new SystemMessage("You are a helpful chatbot."),
];

// Wrap rl.question in a Promise so we can use await
function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function chatLoop() {
  while (true) {
    const userInput = await askQuestion("You: ");
    
    // If user types exit, break loop and close
    if (userInput.toLowerCase() === 'exit') {
      console.log("Chat ended.");
      rl.close();
      break;
    }
    
    // Add human message to history
    messages.push(new HumanMessage(userInput));
    
    // Get AI response from model
    const output = await model.invoke(messages);
    
    // Add AI response to history
    messages.push(new AIMessage(output.content));
    
    // Show AI reply in terminal
    console.log("AI:", output.content);
  }
}

// Start chat loop
chatLoop();