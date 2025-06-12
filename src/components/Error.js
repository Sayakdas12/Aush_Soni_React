import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError() || {};
  const { status, statusText, message } = err;

  const containerStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    textAlign: "center",
    padding: "20px",
  };

  const titleStyle = {
    fontSize: "4rem",
    color: "#e63946",
    marginBottom: "10px",
  };

  const subtitleStyle = {
    fontSize: "1.5rem",
    marginBottom: "20px",
  };

  const errorCodeStyle = {
    fontSize: "1.2rem",
    color: "#555",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Oops ❗</h1>
      <h2 style={subtitleStyle}>Something went wrong</h2>
      <h3 style={errorCodeStyle}>
        {status || "Error"}: {statusText || message || "Unexpected Error"}
      </h3>
    </div>
  );
};

export default Error;
