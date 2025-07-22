import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Bot, User, Send } from "lucide-react";

const AIChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm Serene, your AI mental health companion. I'm here to provide support, help you explore your feelings, and offer evidence-based coping strategies. How are you feeling today?",
      isAI: true,
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      isAI: false,
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    
    // Simulate AI response with mental health focus
    setTimeout(() => {
      const responses = [
        "I hear you, and thank you for sharing that with me. It takes courage to open up about how you're feeling. Would you like to explore what might be contributing to these feelings?",
        "That sounds challenging. Remember that difficult emotions are temporary and valid. What has helped you cope with similar feelings in the past?",
        "I'm here to support you through this. Sometimes when we're struggling, it helps to break things down into smaller pieces. What's one small thing that might bring you comfort right now?",
        "Your feelings are completely valid. Let's work together to find some strategies that might help. Have you tried any breathing exercises or grounding techniques before?",
        "Thank you for trusting me with this. Mental health is just as important as physical health, and seeking support shows strength. What would feel most helpful for you right now - talking through your thoughts, learning a coping technique, or something else?"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const aiResponse = {
        id: messages.length + 2,
        text: randomResponse,
        isAI: true,
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1500);
  };

  return (
    <section className="py-20 px-6 bg-gradient-gentle">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Chat with Serene AI
          </h2>
          <p className="text-xl text-muted-foreground">
            Have a supportive conversation with our compassionate AI companion
          </p>
        </div>
        
        <Card className="bg-background shadow-card border-0 h-96">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Bot className="w-5 h-5 text-primary" />
              Serene AI Assistant
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 ${
                    message.isAI ? '' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.isAI 
                      ? 'bg-gradient-primary' 
                      : 'bg-gentle-purple'
                  }`}>
                    {message.isAI ? (
                      <Bot className="w-4 h-4 text-white" />
                    ) : (
                      <User className="w-4 h-4 text-foreground" />
                    )}
                  </div>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                    message.isAI
                      ? 'bg-gentle-purple text-foreground'
                      : 'bg-primary text-primary-foreground'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Share what's on your mind... I'm here to listen and support you."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} variant="gradient">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AIChat;