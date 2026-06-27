export const trackEvent = (eventName) => {
  if (window.gtag) {
    window.gtag("event", eventName);
  }
};