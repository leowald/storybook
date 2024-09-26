import PropTypes from "prop-types";
import { useState } from "react";

/**
 * This componet takes in a text and displayes only 255 characters of it.
 * If the text is more than 255 characters, it cuts it off at 255 characters and diplays
 * a more button which can be later used to expand or show less.
 *
 *
 */
const ExpandableText = ({ text }) => {
  const limit = 255;
  const [isExpanded, setExpanded] = useState(false);

  if (text.length <= limit) return <article>{text}</article>;

  return (
    <div>
      {isExpanded ? (
        <article>{text}</article>
      ) : (
        <article>{text.substring(0, limit)}...</article>
      )}
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default ExpandableText;

ExpandableText.propTypes = {
  /**  Text to expand or reduce*/
  text: PropTypes.string,
};
