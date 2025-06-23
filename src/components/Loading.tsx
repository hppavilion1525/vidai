
const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black to-gray-900 flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative">
          <img 
            src="/uploads/Vidhai White Logo.png" 
            alt="Vidhai Logo" 
            className="h-20 w-auto animate-pulse"
          />
          <div className="absolute inset-0 animate-ping">
            <img 
              src="/uploads/Vidhai White Logo.png" 
              alt="Vidhai Logo" 
              className="h-20 w-auto opacity-20"
            />
          </div>
        </div>
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <p className="text-gray-300 text-lg font-medium animate-fade-in">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;
