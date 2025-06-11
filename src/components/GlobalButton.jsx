<<<<<<< HEAD
import React from "react";

const GlobalButton = ({
  text,
  onClick,
  color = "#000",
  textColor = "#ffffff",
  border = "1px solid",
  
}) => {
  const buttonStyle = {
    backgroundColor: color,
    color: textColor,
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    borderWidth: "1px",
    border:border,
  };

  return (
    <button onClick={onClick} style={buttonStyle} className="cta">
      {text}
    </button>
  );
};

export default GlobalButton;
=======
import React from "react";

const GlobalButton = ({
  text,
  onClick,
  color = "#000",
  textColor = "#ffffff",
  border = "1px solid",
  
}) => {
  const buttonStyle = {
    backgroundColor: color,
    color: textColor,
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    borderWidth: "1px",
    border:border,
  };

  return (
    <button onClick={onClick} style={buttonStyle} className="cta">
      {text}
    </button>
  );
};

export default GlobalButton;
>>>>>>> 44b9ae1c1c044de235c97c977f1aba24915e5325
