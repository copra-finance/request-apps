export const getPayUrl = (requestId: string) =>
  window.location.hostname === "localhost"
    ? `http://localhost:3001/${requestId}`
    : `https://${process.env.REACT_APP_COPRA_PAYMENT_URL}/${requestId}`;
