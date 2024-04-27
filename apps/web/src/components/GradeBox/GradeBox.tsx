const GradeBox = ({ grade }: { grade: string }) => {
  return (
    <div className="grade-box">
      <span className="grade-box__grade">{grade}</span>
    </div>
  );
};

export default GradeBox;
