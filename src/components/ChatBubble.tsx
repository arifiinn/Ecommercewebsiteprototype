interface ChatBubbleProps {
  message: string;
  timestamp: string;
  isOwn: boolean;
  avatar?: string;
}

export default function ChatBubble({ message, timestamp, isOwn, avatar }: ChatBubbleProps) {
  return (
    <div className={`flex gap-3 ${isOwn ? 'flex-row-reverse' : 'flex-row'}`}>
      {!isOwn && avatar && (
        <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
          <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
        </div>
      )}
      <div className={`flex flex-col ${isOwn ? 'items-end' : 'items-start'} max-w-[70%]`}>
        <div 
          className={`px-4 py-2 rounded-2xl ${
            isOwn 
              ? 'bg-emerald-600 text-white rounded-tr-sm' 
              : 'bg-gray-100 text-gray-900 rounded-tl-sm'
          }`}
        >
          <p className="text-sm">{message}</p>
        </div>
        <span className="text-xs text-gray-500 mt-1">{timestamp}</span>
      </div>
    </div>
  );
}
