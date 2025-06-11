<<<<<<< HEAD
import React, { useEffect } from 'react';

const OverlayLoader = ({ visible }) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="overlay-loader">
      <div className="loader"></div>
    </div>
  );
};

export default OverlayLoader;
=======
import React, { useEffect } from 'react';

const OverlayLoader = ({ visible }) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="overlay-loader">
      <div className="loader"></div>
    </div>
  );
};

export default OverlayLoader;
>>>>>>> 44b9ae1c1c044de235c97c977f1aba24915e5325
