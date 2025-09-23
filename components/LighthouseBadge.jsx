const LighthouseBadge = ({ score, category }) => {
  // Determine color based on score
  const getColor = (score) => {
    if (score >= 90) return '#0CCE6A'; // Green
    if (score >= 50) return '#FFA400'; // Orange
    return '#FF4E42'; // Red
  };

  const color = getColor(score);

  return (
    <div className="inline-flex items-center bg-gray-800 rounded px-2 py-1 mr-2 mb-2">
      <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 3L4 9V21H20V9L12 3Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 3V21"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-xs font-medium text-white">
        {category}: {score}
      </span>
    </div>
  );
};

export default LighthouseBadge;