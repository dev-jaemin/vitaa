export const MOCK_CHAT_DATA: ChatData[] = [
  {
    sender: 'me',
    message: '오늘 저녁메뉴 추천해줘!',
  },
  {
    sender: 'you',
    message: '오늘은 치킨이 어때요?',
  },
  {
    sender: 'me',
    message: '치킨이 좋아요!',
  },
  {
    sender: 'you',
    message: '그럼 치킨으로 정했어요!',
  },
  {
    sender: 'me',
    message: '네 알겠어요!',
  },
];

export interface ChatData {
  sender: 'me' | 'you';
  message: string;
}
