/* https://reactjs.org/docs/error-boundaries.html */
/* https://codepen.io/gaearon/pen/wqvxGa?editors=0010 */

import { Component } from "react"

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="center" style={{ paddingTop: "50px" }}>
          <h1>An Error Occured</h1>
          <p style={{ paddingTop: "15px" }}>Please refresh the page or go to the homepage.</p>
          <a className="link" style={{ paddingTop: "15px" }} href="/">&larr; Homepage</a>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
