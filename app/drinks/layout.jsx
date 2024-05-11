import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div className="mockup-code mb-5">
        <pre data-prefix="$">
          <code>npx learn next@latest</code>
        </pre>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default layout;
