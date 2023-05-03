const Alert = ({ message, type, children }) => {
    const alertStyle = {
      width: "100%",
      height: "10vh",
      fontSize: "0.875rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      background:
        type === "success" ? "#00FF8D" : type === "error" ? "#FF5300" : "#00A3FF",
      color: "#000000",
      opacity: "0.8",
      borderBottomLeftRadius: "3rem",
      borderBottomRightRadius: "3rem",
    };
  
    return (
      <div style={alertStyle}>
        <span>{message}</span>
      </div>
    );
  };
  
  export default Alert;