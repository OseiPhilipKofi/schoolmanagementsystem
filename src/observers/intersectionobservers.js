const createIntersectionObserver = (elements, options = { threshold: 0.1 }) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const target = entry.target;
      if (entry.isIntersecting) {
        if (target.classList.contains('intersecting')) {
            target.classList.remove('intersecting');
        }
      } else {
          target.classList.add('intersecting');
        }
    });
  }, options);

  if (NodeList.prototype.isPrototypeOf(elements) || Array.isArray(elements)) {
      elements.forEach((el) => observer.observe(el));
  } else if (elements instanceof Element) {
    observer.observe(elements);
  } else {
    console.warn('Invalid elements passed to createIntersectionObserver');
  }

  return observer;
};

export default createIntersectionObserver;
