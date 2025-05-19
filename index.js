import 'dotenv/config'
import {ChatGoogleGenerativeAI} from "@langchain/google-genai"

console.log("KEY :", process.env.GOOGLE_GEMINI_API_KEY);

// now instantitate: to creating object from class
// Actually this ChatGoogleGenerativeAi is class 
// by using new keyword we create it object 

const model = new ChatGoogleGenerativeAI({
model: "gemini-2.0-flash",
// randomness of output: 0 low and 2 is high 
temperature:0
})