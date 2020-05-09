import { useEffect } from 'react';

const Scripts =()=> {
  useEffect(() => {
    const script = document.createElement('script');
    const script1 = document.createElement('script');

    script.src =//ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js ;
    script1.src =//ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js ;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default Scripts;