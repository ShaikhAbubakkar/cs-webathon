import { useEffect } from 'react';

const useStickyHeader = (headerRef) => {
  useEffect(() => {
    const header = headerRef.current;

    const handleScroll = () => {
      header.classList.toggle('sticky', window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerRef]);
};

export default useStickyHeader;
