import { Component } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
          <div className="card w-full max-w-md bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <AlertTriangle className="w-16 h-16 text-error mx-auto mb-4" />
              <h2 className="card-title justify-center text-error">
                Something went wrong
              </h2>
              <p className="text-base-content/70 mb-4">
                An unexpected error occurred. Please try refreshing the page.
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary" onClick={this.handleReset}>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </button>
                <button
                  className="btn btn-outline"
                  onClick={() => (window.location.href = "/")}
                >
                  Go Home
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
