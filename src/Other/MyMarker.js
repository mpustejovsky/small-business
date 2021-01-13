export const MyMarker = ({ text, tooltip }) => (
    <div className="circle">
      <span className="circleText" title={tooltip}>
        {text}
      </span>
    </div>
  );

  export const MyMarker2 = ({ text, tooltip }) => (
    <div className="circle">
      <span className="nameText" title={tooltip}>
        {text}
      </span>
    </div>
  );

  