const useReviewProps = (rating: string) => {
  switch (rating) {
    case 'A':
      return {
        color: '#e1f5fe',
        emoji: '😆',
      };
    case 'B':
      return {
        color: '#e1bee7',
        emoji: '😊',
      };
    case 'C':
      return {
        color: '#ffcc80',
        emoji: '😐',
      };
    case 'D':
      return {
        color: '#ffab91',
        emoji: '😞',
      };
    default:
      return {
        color: '#f5f5f5',
        emoji: '😞',
      };
  }
};

export default useReviewProps;
