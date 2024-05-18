const useReviewProps = (rating: string) => {
  switch (rating) {
    case 'A':
      return {
        color: '#E8FBDF',
        fontColor: '#4CAF50',
        emoji: '😆',
      };
    case 'B':
      return {
        color: '#DFE7FB',
        fontColor: '#3F51B5',
        emoji: '😊',
      };
    case 'C':
      return {
        color: '#F5F5F5',
        fontColor: '#9E9E9E',
        emoji: '😐',
      };
    case 'D':
      return {
        color: '#ffcc80',
        fontColor: '#FF9800',
        emoji: '😞',
      };
    case 'E':
      return {
        color: '#FFD7DF',
        fontColor: '#FF5252',
        emoji: '😞',
      };
    default:
      return {
        color: '#f5f5f5',
        fontColor: '#9e9e9e',
        emoji: '😞',
      };
  }
};

export default useReviewProps;
