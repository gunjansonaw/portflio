import React from "react";

interface SpotlightProps {
  className?: string;
}

const Spotlight: React.FC<SpotlightProps> = ({ className }) => {
  return <div className={"spotlight-mask " + (className ?? "")} aria-hidden="true" />;
};

export default Spotlight;
