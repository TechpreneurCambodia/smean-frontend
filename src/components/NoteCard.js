"use client";
import { useState } from "react";
import { MoveRight, Pencil, Trash2 } from "lucide-react";
import { Tooltip } from "@mui/material";

function NoteCard({
  id,
  heading = "This is heading",
  description = "Card description with lots of great facts and interesting details.",
  href = "#",
  onHeadingUpdate,
  onDelete, // Add onDelete prop
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentHeading, setCurrentHeading] = useState(heading);
  const [isLoading, setIsLoading] = useState(false);

  const handleHeadingSubmit = async (e) => {
    if (e.key === "Enter" || e.type === "blur") {
      setIsEditing(false);
      if (currentHeading.trim() && currentHeading !== heading) {
        setIsLoading(true);
        try {
          const response = await fetch(`/api/notes/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ heading: currentHeading }),
          });

          if (!response.ok) {
            throw new Error("Failed to update heading");
          }

          onHeadingUpdate?.(currentHeading);
        } catch (error) {
          console.error("Error updating heading:", error);
          setCurrentHeading(heading);
          alert("Failed to save changes. Please try again.");
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  const cardStyle = {
    maxWidth: "100%",
    backgroundColor: "#f2f8f9",
    borderRadius: "10px",
    padding: "64px 32px",
    textDecoration: "none",
    position: "relative",
    overflow: "hidden",
    zIndex: 0,
    display: "block",
    transition: "all 0.3s ease-out",
    boxShadow: isHovered ? "0 4px 8px rgba(38, 38, 38, 0.2)" : "none",
  };

  const headingStyle = {
    fontSize: "17px",
    fontWeight: "600",
    lineHeight: "20px",
    color: isHovered ? "rgba(255, 255, 255, 0.8)" : "#666",
    margin: "0",
    transition: "all 0.3s ease-out",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  };

  const editInputStyle = {
    fontSize: "17px",
    fontWeight: "600",
    lineHeight: "20px",
    color: isHovered ? "rgba(255, 255, 255, 0.8)" : "#666",
    margin: "0",
    transition: "all 0.3s ease-out",
    borderBottom: "2px solid #00838d",
    background: "transparent",
    outline: "none",
    width: "100%",
  };

  const descriptionStyle = {
    fontSize: "14px",
    color: isHovered ? "rgba(255, 255, 255, 0.8)" : "#666",
    margin: "0",
    transition: "all 0.3s ease-out",
  };

  const goCornerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: "32px",
    height: "32px",
    overflow: "hidden",
    top: "0",
    right: "0",
    backgroundColor: "#00838d",
    borderRadius: "0 4px 0 32px",
  };

  const goArrowStyle = {
    marginTop: "-4px",
    marginRight: "-4px",
    color: "white",
    fontFamily: "courier, sans-serif",
  };

  const beforeStyle = {
    position: "absolute",
    zIndex: -1,
    top: "-16px",
    right: "-16px",
    background: "#00838d",
    height: "32px",
    width: "32px",
    borderRadius: "32px",
    transform: isHovered ? "scale(50)" : "scale(1)",
    transformOrigin: "100% 50%",
    transition: "transform 0.5s ease-out",
  };

  const pencilStyle = {
    color: isHovered ? "rgba(255, 255, 255, 0.8)" : "#666",
    transition: "all 0.3s ease-out",
    cursor: "pointer",
  };

  return (
    <div className="card">
      <a
        href={href}
        style={cardStyle}
        className="card1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={beforeStyle}></div>
        {/* Trash icon in the top-left corner */}
        <div className="absolute top-4 left-4">
          <Tooltip title="លុប" arrow>
            <Trash2
              className="w-5 h-5 text-red-600 hover:text-red-800 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                onDelete(); // Call the delete handler
              }}
            />
          </Tooltip>
        </div>
        <div className="flex flex-col gap-2">
          {isEditing ? (
            <input
              type="text"
              value={currentHeading}
              onChange={(e) => setCurrentHeading(e.target.value)}
              onKeyDown={handleHeadingSubmit}
              onBlur={handleHeadingSubmit}
              autoFocus
              style={editInputStyle}
              disabled={isLoading}
            />
          ) : (
            <p style={headingStyle} title={currentHeading}>
              {currentHeading}
            </p>
          )}
          <p style={descriptionStyle} className="small">
            {description}
          </p>
        </div>
        <div style={goCornerStyle} className="go-corner">
          <div style={goArrowStyle} className="go-arrow">
            <Tooltip title="មើលបន្ថែម" arrow>
              <MoveRight className="w-5 h-5" />
            </Tooltip>
          </div>
        </div>
        <div className="absolute bottom-4 right-4">
          <Tooltip title={isEditing ? "រក្សាទុក" : "កែឈ្មោះចំណងជើង"} arrow>
            <Pencil
              size={20}
              style={pencilStyle}
              className={`w-5 h-5 ${
                isEditing ? "text-[#00838d]" : "text-gray-500"
              } hover:text-[#00838d] hover:scale-110 transition-all duration-200`}
              onClick={(e) => {
                e.preventDefault();
                setIsEditing(!isEditing);
              }}
            />
          </Tooltip>
        </div>
      </a>
    </div>
  );
}

export default NoteCard;