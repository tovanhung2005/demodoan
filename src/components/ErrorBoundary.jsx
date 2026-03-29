import React from "react";
import { Button } from "./ui/button";
import { AlertTriangle } from "lucide-react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
          <AlertTriangle className="w-16 h-16 text-yellow-500 mb-4" />
          <h1 className="text-2xl font-bold mb-2">Rất tiếc, đã có lỗi xảy ra.</h1>
          <p className="text-gray-600 mb-6">Ứng dụng vừa gặp một sự cố không mong muốn.</p>
          <Button onClick={() => window.location.href = "/"}>
            Quay lại trang chủ
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;