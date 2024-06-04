import { BottomSheet } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType, useActivity } from '@stackflow/react';
import { Box, Button, Input, Typography, styled } from '@mui/material';
import { ChatItem } from '../../components/ChatItem';
import { useGetChats } from '../../apis/chat/_hooks/getChat.hook';
import VitaBot from '/VITA.png';
import { usePostChat } from '../../apis/chat/_hooks/postChat.hook.ts';
import { useEffect, useState } from 'react';
import { useTodayNutrient } from '../../recoil/meal';
import { LoadingChatItem } from '../../components/ChatItem/LoadingChat.tsx';
import { useIsLoadingChat, useSetIsLoadingChat, useTempMessageStore } from '../../recoil/chat.ts';
import { useFlow } from '../../layouts/stackflow.ts';

const ChatBottomSheet: ActivityComponentType = () => {
  const activity = useActivity();
  const currentMessage = activity.params.message;

  const { replace } = useFlow();

  const [message, setMessage] = useState('');
  const [tempMessage, setTempMessage] = useTempMessageStore();

  const { data: messages } = useGetChats();

  const todayNutrient = useTodayNutrient();

  const send = usePostChat();
  const isLoadingChat = useIsLoadingChat();
  const setIsLoadingChat = useSetIsLoadingChat();

  useEffect(() => {
    if (currentMessage) {
      console.log('handling SEnd');

      handleSend();
    }
  }, [currentMessage]);

  const removeCurrentMessage = () => {
    replace('ChatBottomSheet', {});
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    setIsLoadingChat(true);
    setTempMessage({ message: currentMessage ?? message, type: 'question', createdAt: new Date().toString() });
    scrollToBottom();

    setTimeout(() => {
      scrollToBottom();
    }, 500);

    try {
      if (!currentMessage && !message) return;
      send.mutate({ message: currentMessage ?? message, dayNutrient: todayNutrient });
      setMessage('');
    } catch (e) {
      console.error(e);
      setIsLoadingChat(false);
    }

    if (!isLoadingChat && currentMessage) {
      removeCurrentMessage();
    }
  };

  const scrollToBottom = () => {
    const chatBox = document.getElementById('chatBox');
    if (chatBox) {
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <BottomSheet>
      <Box display="flex" alignItems="center" gap={1} p={2} borderBottom="1px solid #ddd">
        <Profile src={VitaBot} />
        <Typography variant="h4">비타</Typography>
      </Box>
      <Box maxHeight={'100%'} display="flex" flexDirection="column" justifyContent="space-between">
        <Box margin={1} maxHeight={400} sx={{ overflow: 'scroll' }} id="chatBox">
          {messages?.map((message, index) => (
            <ChatItem
              key={index}
              me={message.type === 'question'}
              message={message.message}
              createdAt={message.createdAt ?? ''}
            />
          ))}
          {isLoadingChat && <ChatItem me message={tempMessage.message} createdAt={tempMessage.createdAt} isSending />}
          {isLoadingChat && <LoadingChatItem />}
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px={2}
          py={1}
          borderTop="1px solid #eeeeee"
        >
          <Input
            disabled={isLoadingChat}
            placeholder={isLoadingChat ? '비타가 답변중이에요!' : '비타와 자유롭게 대화해보세요!'}
            sx={{ width: '70%' }}
            onChange={handleMessageChange}
            value={message}
            onKeyUp={e => {
              if (e.key === 'Enter') {
                handleSend();
              }
            }}
          />
          <Button variant="contained" color="primary" onClick={handleSend}>
            전송
          </Button>
        </Box>
      </Box>
    </BottomSheet>
  );
};

export default ChatBottomSheet;

const Profile = styled('img')({
  borderRadius: '50%',
  width: 36,
  height: 36,
  objectFit: 'cover',
});
