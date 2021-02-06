const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({
      getCLS, getFID, getFCP, getLCP, getTTFB,
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

// "@testing-library/jest-dom": "^5.11.6",
// "@testing-library/react": "^11.2.5",
// "@testing-library/user-event": "^12.6.3",
