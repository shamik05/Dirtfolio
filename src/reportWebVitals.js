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

// "@emotion/react": "^11.1.5",
//     "@emotion/styled": "^11.1.5",
//     "@material-ui/core": "^5.0.0-alpha.25",
//     "@material-ui/icons": "^4.11.2",
//     "@material-ui/system": "^4.11.3",
// "bootstrap": "^5.0.0-beta2",
