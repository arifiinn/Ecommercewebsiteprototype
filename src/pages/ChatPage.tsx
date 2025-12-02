import { useState } from 'react';
import { Send, Paperclip, MoreVertical, Flag, Ban, ArrowLeft, Circle } from 'lucide-react';
import ChatBubble from '../components/ChatBubble';
import { mockChatMessages } from '../data/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface ChatPageProps {
  seller: any;
}

export default function ChatPage({ seller }: ChatPageProps) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(mockChatMessages);
  const [showMenu, setShowMenu] = useState(false);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        message: message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isOwn: true
      }]);
      setMessage('');
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Chat Header */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-gray-600">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300">
              {seller?.avatar && (
                <ImageWithFallback 
                  src={seller.avatar}
                  alt={seller.name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div>
              <h3 className="text-gray-900">{seller?.name || 'Seller'}</h3>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Circle className="w-2 h-2 fill-emerald-500 text-emerald-500" />
                <span>Active now</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <button 
              onClick={() => setShowMenu(!showMenu)}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <MoreVertical className="w-6 h-6" />
            </button>
            
            {showMenu && (
              <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 w-48 z-10">
                <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                  <Flag className="w-4 h-4" />
                  Report User
                </button>
                <button className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-50 flex items-center gap-2">
                  <Ban className="w-4 h-4" />
                  Block User
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-4">
          {/* Date Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-sm text-gray-500">Today</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {messages.map((msg) => (
            <ChatBubble 
              key={msg.id}
              message={msg.message}
              timestamp={msg.timestamp}
              isOwn={msg.isOwn}
              avatar={!msg.isOwn ? seller?.avatar : undefined}
            />
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 px-4 sm:px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end gap-3">
            <button className="p-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <Paperclip className="w-6 h-6" />
            </button>
            
            <div className="flex-1 relative">
              <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Type a message..."
                rows={1}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-emerald-500 transition-colors resize-none"
              />
            </div>
            
            <button 
              onClick={handleSendMessage}
              className="p-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <Send className="w-6 h-6" />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">Press Enter to send, Shift+Enter for new line</p>
        </div>
      </div>
    </div>
  );
}
