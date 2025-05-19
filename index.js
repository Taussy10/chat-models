import 'dotenv/config'
import {ChatGoogleGenerativeAI} from "@langchain/google-genai"
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import readline from 'readline'
console.log("KEY :", process.env.GOOGLE_GEMINI_API_KEY);

// now instantitate: to creating object from class
// Actually this ChatGoogleGenerativeAi is class 
// by using new keyword we create it object 

const model = new ChatGoogleGenerativeAI({
model: "gemini-2.0-flash",
// randomness of output: 0 low and 2 is high 
temperature:0,
// apiKey: 'AIzaSyDAf6Q5bINmO3lgBY41zbnw3g_jffmiwN8',
apiKey: process.env.GOOGLE_GEMINI_API_KEY,
})

const messages = [
  new SystemMessage("Translate the following from English into HINDI"),
  new HumanMessage("Hello my name is Tausif"),
];

// This is for invoking the AI model 
const output = await model.invoke(messages)

// Don't do basic mistakes: for seeing your
//  result you have to console it 
console.log("OUTPUT :",output.content);

