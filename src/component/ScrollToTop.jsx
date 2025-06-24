import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Function component version that works with React Router
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // The most direct approach
    window.scrollTo(0, 0);

    // Set a timeout to ensure this happens after any React rendering
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      console.log("ScrollToTop with timeout executed for path:", pathname);
    }, 100);
  }, [pathname]);

  return null;
};

// Class component version that can be used directly in components
class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

export { ScrollToTopOnMount };
export default ScrollToTop;


