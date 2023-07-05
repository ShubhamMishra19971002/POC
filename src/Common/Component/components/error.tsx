import React from 'react';
import { logHandler } from '../../services/logging.service';
import { Container } from '../styles/layouts';
import pageNotFound from '../../images/data-broken.png';
import { postToNativeApp } from '../helpers';


class ErrorBoundary extends React.Component<any, { hasError: boolean }> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    // ga.exception({
    //   description: JSON.stringify({ error, info }),
    //   fatal: true,
    // });
    logHandler('Boundary Exception', error, info);
    postToNativeApp({
      error: 'Boundary Exception'
    }); //post a message to native app on crash
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Container className="overflowX-hidden">
      <div className="has-sticky-header">
        <div className='p-6 no-data'>
          <img src={pageNotFound} className="w-full" alt="pageNotFound" />
          <h4 className='my-2 text-center'>Something went wrong</h4>
          <p className='text-center'>Well, this is awkward. What you are looking for is not here.
            {/* <br />
            <a href="/" style={{ textDecoration: 'none', color: variables.active }}>Contact</a> us for more details */}
          </p>
        </div>
      </div>
    </Container>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
