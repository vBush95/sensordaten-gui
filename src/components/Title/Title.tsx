import React from "react";

export interface Props {
  /**
   * Content of the title.
   */
  children: string;
  /**
   * The Color of the title.
   */
  color: string;
  /**
   * The size of the title.
   */
  size: "small" | "medium" | "large";
}

/**
 * A title represents the main heading of the page
 * and should therefore only appear once per page.
 */

export const Title: React.FC<Props> = ({ children, color, size }) => {
  const getStyle = (): React.CSSProperties => ({
    color,
    fontSize: size === "large" ? "40px" : size === "medium" ? "30px" : "20px",
  });

  return <h1 style={getStyle()}>{children}</h1>;
};

export default Title;
