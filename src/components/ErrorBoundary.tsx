import React, { Component, ErrorInfo } from 'react';

interface Props {
  name: string;
}

interface State {
  error?: any;
  errorInfo?: ErrorInfo;
}

/**
 * Error boundary wrapper to save Application parts from falling
 * @param {string} [props.name] - name of the wrapped segment, "Error Boundary" by default
 */
class ErrorBoundary extends Component<Props, State> {
  state: State = {
    error: null,
  };

  componentDidCatch(error: any, errorInfo: ErrorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // We can also log error messages to an error reporting service here
  }

  render() {
    const { errorInfo } = this.state;
    if (errorInfo) {
      // Error path
      const { error } = this.state;
      const { name = 'Error Boundary' } = this.props;
      return (
        <div>
          <h2>{name} - Something went wrong</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error ? error.toString() : null}
            <br />
            {errorInfo?.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
