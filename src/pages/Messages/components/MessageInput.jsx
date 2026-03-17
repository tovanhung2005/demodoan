import { useRef } from "react";
import { Send, Paperclip, Image as ImageIcon, X, FileText } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

export default function MessageInput({
  messageText,
  setMessageText,
  sendMessage,
  selectedImage,
  setSelectedImage,
  selectedFile,
  setSelectedFile,
  handleImageSelect,
  handleFileSelect,
}) {
  const imageInputRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="bg-white border-t p-3 flex flex-col shrink-0">
      
      {/* Khung Preview Hình ảnh / File trước khi gửi */}
      {(selectedImage || selectedFile) && (
        <div className="max-w-4xl mx-auto w-full px-2 mb-3 flex items-center space-x-4">
          {selectedImage && (
            <div className="relative inline-block">
              <img src={selectedImage} alt="Preview" className="h-16 w-16 object-cover rounded-lg border shadow-sm" />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-2 -right-2 bg-gray-800 text-white rounded-full p-1 hover:bg-red-500"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
          
          {selectedFile && (
            <div className="relative flex items-center bg-gray-100 px-3 py-2 rounded-lg border shadow-sm">
              <FileText className="w-6 h-6 text-blue-500 mr-2" />
              <div>
                <p className="text-sm font-medium truncate max-w-[150px]">{selectedFile.name}</p>
                <p className="text-xs text-gray-500">{selectedFile.size}</p>
              </div>
              <button 
                onClick={() => setSelectedFile(null)}
                className="absolute -top-2 -right-2 bg-gray-800 text-white rounded-full p-1 hover:bg-red-500"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Vùng nhập liệu */}
      <div className="flex items-center space-x-2 max-w-4xl mx-auto w-full">
        {/* Input file ẩn */}
        <input type="file" accept="image/*" hidden ref={imageInputRef} onChange={handleImageSelect} />
        <input type="file" hidden ref={fileInputRef} onChange={handleFileSelect} />

        <Button 
          variant="ghost" 
          size="icon" 
          className="text-gray-500 hover:text-blue-500 hover:bg-blue-50 shrink-0"
          onClick={() => fileInputRef.current?.click()}
        >
          <Paperclip className="w-5 h-5" />
        </Button>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-gray-500 hover:text-blue-500 hover:bg-blue-50 shrink-0"
          onClick={() => imageInputRef.current?.click()}
        >
          <ImageIcon className="w-5 h-5" />
        </Button>
        
        <Input
          placeholder="Nhập tin nhắn..."
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-gray-100 border-transparent focus-visible:ring-1 focus-visible:ring-blue-500 rounded-full px-4"
        />

        <Button 
          onClick={sendMessage}
          disabled={!messageText.trim() && !selectedImage && !selectedFile}
          className={`rounded-full w-10 h-10 p-0 shrink-0 transition-colors ${
            messageText.trim() || selectedImage || selectedFile
              ? "bg-blue-500 hover:bg-blue-600 text-white shadow-md" 
              : "bg-gray-200 text-gray-400"
          }`}
        >
          <Send className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}