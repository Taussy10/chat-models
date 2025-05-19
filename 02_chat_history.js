import 'dotenv/config'
import {ChatGoogleGenerativeAI} from "@langchain/google-genai"
import { AIMessage, HumanMessage, SystemMessage } from "@langchain/core/messages";
import readline from 'readline'


//  you can change diff models quickyly by 
// https://js.langchain.com/docs/integrations/chat/
const model = new ChatGoogleGenerativeAI({
model: "gemini-2.0-flash",
// randomness of output: 0 low and 2 is high 
temperature:0,
apiKey: process.env.GOOGLE_GEMINI_API_KEY,
})


// Learning: 
// 1. 3 tyeps of messaages 
// 2.LLM able to tell acc to  
// the chat history then by which llm

// there are two types of message provided by langchain 
// Resource: https://js.langchain.com/docs/concepts/messages/
// 2. System: for input: think yourself you are self as langchain teacher
// 1. Human: for human input: tell me alt of langchain 

// BTW there are two ways to WRITE MESSAGE 

// 1. Langchain style:
const message = [
    // system message should be first one 
    // System message is for giving context to AI
    new SystemMessage("think yourself you are self as langchain teacher"),
    // then human will input something 
    new HumanMessage("explain me langchain in 2 word"),
    // then ai will oupt something 
    new AIMessage("Data Orchestration"),
    // then human will input something 
    new HumanMessage("Explailn these jargons")
    // then AI will give output in AIoutput variable 
]
// what's the diff between SystemMessage and AIMessage 
// firstly both messages are given to AI 
// System message is for giving context/role to AI that you are thish
// SystemMessage will be only use one time
// system messge maan le developer ne instrcution 
// diya hia pehele hi se that you have to behave like this  

// AIMessage is: after told by Human AI will generate message that's a AI message
// AI message will be use multiple times 
const AIOutput = await model.invoke(message)
console.log("AIOutput :",AIOutput.content);


// 2. OpenAI style
// const output = await model.invoke([{role: 'user',  content: "think yourself you are self as langchain teacher",}, {role:'user', content: 'tell me alt of langchain'}])
// console.log("OUTPUT :",output.content)

