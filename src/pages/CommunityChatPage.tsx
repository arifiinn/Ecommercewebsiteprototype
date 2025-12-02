import { useState } from 'react';
import { Search, Hash, Users, Send, Paperclip, Share2 } from 'lucide-react';
import { communityChannels, mockCommunityChatMessages } from '../data/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface CommunityChatPageProps {
  onProductClick: (productId: number) => void;
}

export default function CommunityChatPage({ onProductClick }: CommunityChatPageProps) {
  const [selectedChannel, setSelectedChannel] = useState(communityChannels[0]);
  const [message, setMessage] = useState('');
  const [showChannels, setShowChannels] = useState(true);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage('');
    }
  };

  return (
    <div className="h-screen flex bg-gray-50">
      {/* Channels Sidebar */}
      <div className={`${showChannels ? 'w-80' : 'w-0'} bg-white border-r border-gray-200 flex-shrink-0 overflow-hidden transition-all duration-300`}>
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-gray-900 mb-4">Community Channels</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text"
              placeholder="Search channels..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-160px)]">
          {communityChannels.map((channel) => (
            <button
              key={channel.id}
              onClick={() => setSelectedChannel(channel)}
              className={`w-full p-4 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 ${
                selectedChannel.id === channel.id ? 'bg-emerald-50 border-l-4 border-l-emerald-600' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Hash className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-gray-900">{channel.name}</h3>
                </div>
                {channel.unread > 0 && (
                  <span className="px-2 py-0.5 bg-emerald-600 text-white text-xs rounded-full">
                    {channel.unread}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 truncate mb-1">{channel.lastMessage}</p>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Users className="w-3 h-3" />
                <span>{channel.members.toLocaleString()} members</span>
                <span>•</span>
                <span>{channel.lastMessageTime}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Channel Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Hash className="w-6 h-6 text-emerald-600" />
                <h2 className="text-gray-900">{selectedChannel.name}</h2>
              </div>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <Users className="w-4 h-4" />
                {selectedChannel.members.toLocaleString()} members
              </p>
            </div>
            <button className="text-gray-600 hover:text-gray-900">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="max-w-4xl space-y-6">
            {/* Welcome Message */}
            <div className="bg-emerald-50 rounded-xl p-6 text-center">
              <Hash className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <h3 className="text-gray-900 mb-2">Welcome to #{selectedChannel.name}</h3>
              <p className="text-gray-600">
                This is the beginning of the #{selectedChannel.name} channel. Share deals, ask questions, and connect with the community!
              </p>
            </div>

            {/* Featured Thread */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-1 text-emerald-600 mb-3 text-sm">
                <Hash className="w-4 h-4" />
                <span>Featured Discussion</span>
              </div>
              <h3 className="text-gray-900 mb-2">Best deals this week - Share your finds!</h3>
              <p className="text-gray-600 mb-4">
                What are the best deals you've found this week? Share links to products and help others save money.
              </p>
              <button className="text-emerald-600 hover:text-emerald-700 text-sm">
                View 47 replies →
              </button>
            </div>

            {/* Chat Messages */}
            {mockCommunityChatMessages.map((msg) => (
              <div key={msg.id} className="flex gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                  <ImageWithFallback 
                    src={msg.avatar}
                    alt={msg.userName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-gray-900">{msg.userName}</span>
                    <span className="text-xs text-gray-500">{msg.timestamp}</span>
                  </div>
                  <p className="text-gray-700">{msg.message}</p>
                </div>
              </div>
            ))}

            {/* Product Share Example */}
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-gray-900">John D.</span>
                  <span className="text-xs text-gray-500">Just now</span>
                </div>
                <p className="text-gray-700 mb-3">Check out this amazing camera I'm selling!</p>
                
                {/* Shared Product Card */}
                <div 
                  onClick={() => onProductClick(2)}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:border-emerald-500 transition-colors cursor-pointer max-w-md"
                >
                  <div className="flex gap-3">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800"
                      alt="Vintage Camera"
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="text-gray-900 mb-1">Vintage Camera</h4>
                      <p className="text-emerald-600 mb-1">$450</p>
                      <p className="text-sm text-gray-500">Los Angeles, CA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="bg-white border-t border-gray-200 px-6 py-4">
          <div className="max-w-4xl flex items-end gap-3">
            <button className="p-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <Paperclip className="w-6 h-6" />
            </button>
            
            <div className="flex-1">
              <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder={`Message #${selectedChannel.name}`}
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
        </div>
      </div>
    </div>
  );
}
