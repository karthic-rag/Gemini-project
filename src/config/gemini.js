
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const apiKey = "AIzaSyB_vlDQBFhY8IPa_uuzPM4QlwNEosy11LQ";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  
  
async function run(prompt) {
   

    const safetySetting = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
];

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", safetySetting });
    const chatSession = model.startChat({
      generationConfig,
      safetySetting,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    return result.response.text();
  }
  
 export default run;