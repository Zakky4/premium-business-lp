import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

export const generateInquiryResponse = async (name: string, message: string): Promise<string> => {
  if (!apiKey) {
    console.warn("API Key not found. Returning mock response.");
    return `Thank you, ${name}. We have received your inquiry regarding "${message.substring(0, 20)}...". A consultant will contact you shortly.`;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const systemInstruction = `
      You are an elite AI Concierge for "AETHER", a luxury business strategy firm.
      Your tone is extremely polite, professional, elegant, and reassuring.
      The user has just submitted an inquiry via the website contact form.
      
      Task:
      Generate a short, personalized confirmation message (max 2 sentences).
      Acknowledge their specific message content subtly.
      Assure them that a Senior Partner will review it personally.
      Language: Japanese.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `User Name: ${name}\nUser Message: ${message}`,
      config: {
        systemInstruction: systemInstruction,
      },
    });

    return response.text || "お問い合わせありがとうございます。担当者が確認次第、ご連絡いたします。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "お問い合わせありがとうございます。現在AIサービスが混み合っておりますが、メッセージは正常に送信されました。";
  }
};