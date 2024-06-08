import { Box, Typography } from '@mui/material';
import { BottomSheet } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';

const RulesBottomSheet: ActivityComponentType = () => {
  return (
    <BottomSheet>
      <Box maxHeight={'80vh'} overflow={'auto'}>
        <Box flexDirection={'column'} display="flex" p={4} justifyContent="space-between">
          <Typography variant="h3">비타의 이용약관</Typography>
          {RULES_DATA.map((rule, index) => (
            <Box key={index} mt={4}>
              {rule.title && <Typography variant="h4">{rule.title}</Typography>}
              {rule.content.map((content, index) => (
                <Typography key={index} variant="body1">
                  {content}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </BottomSheet>
  );
};

export default RulesBottomSheet;

// data 파일 만드는 대신 여기에 이용약관 데이터 정의함

interface Rules {
  title?: string;
  content: string[];
}

const RULES_DATA: Rules[] = [
  {
    content: [
      '본 이용약관(이하 "약관")은 비타(이하 "서비스")를 이용하는 모든 고객(이하 "이용자")에게 적용됩니다. 서비스를 이용함으로써 이용자는 본 약관에 동의하는 것으로 간주됩니다.',
    ],
  },
  {
    title: '제 1 조 (목적)',
    content: [
      '본 약관은 비타가 제공하는 음식 추천 서비스 및 음식 사진 기반 칼로리 및 영양소 분석 서비스의 이용에 관한 조건 및 절차를 규정함을 목적으로 합니다.',
    ],
  },
  {
    title: '제 2 조 (정의)',
    content: [
      '"서비스"란 이용자가 제공한 음식 사진을 기반으로 칼로리 및 영양소를 분석하고, 이를 토대로 음식 추천을 제공하는 서비스를 의미합니다',
      '"이용자"란 본 약관에 따라 비타의 서비스를 이용하는 자를 말합니다.',
    ],
  },
  {
    title: '제 3 조 (약관의 효력 및 변경)',
    content: [
      '본 약관은 서비스를 이용하고자 하는 모든 이용자에게 그 효력이 발생합니다.',
      '비타는 필요하다고 인정되는 경우 본 약관을 변경할 수 있으며, 변경된 약관은 서비스 내에 공지함으로써 효력이 발생합니다.',
      '이용자는 변경된 약관에 동의하지 않을 권리가 있으며, 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하고 탈퇴할 수 있습니다.',
    ],
  },
  {
    title: '제 4 조 (서비스의 제공 및 변경)',
    content: [
      '비타는 이용자에게 음식 사진을 분석하여 칼로리 및 영양소 정보를 제공하고, 이를 바탕으로 음식 추천 서비스를 제공합니다.',
      '비타는 서비스의 내용, 운영상, 기술상 필요에 따라 제공하는 서비스의 내용을 변경할 수 있으며, 변경 내용은 사전에 공지합니다.',
    ],
  },
  {
    title: '제 5 조 (서비스의 이용)',
    content: [
      '이용자는 서비스를 개인적인 용도로만 사용할 수 있으며, 영리 목적으로 사용할 수 없습니다.',
      '이용자는 정확한 정보를 제공해야 하며, 허위 정보를 제공할 경우 서비스 이용에 제한이 있을 수 있습니다.',
      '이용자는 비타의 사전 승인 없이 서비스의 일부 또는 전부를 복제, 복사, 변경, 배포, 판매할 수 없습니다.',
    ],
  },
  {
    title: '제 6 조 (이용자의 의무)',
    content: [
      '이용자는 본 약관 및 관련 법령을 준수해야 합니다.',
      '이용자는 타인의 권리나 명예를 침해하는 행위를 해서는 안 됩니다.',
      '이용자는 비타의 정상적인 운영을 방해하는 행위를 해서는 안 됩니다.',
    ],
  },
  {
    title: '제 7 조 (개인정보 보호)',
    content: [
      '비타는 이용자의 개인정보를 중요시하며, 관련 법령에 따라 개인정보를 보호하기 위해 노력합니다.',
      '비타는 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다. 다만, 법령에 따라 요구되는 경우는 예외로 합니다.',
    ],
  },
  {
    title: '제 8 조 (면책 조항)',
    content: [
      '비타는 천재지변, 전쟁, 서비스의 유지보수 및 기술적 결함 등 불가항력적인 사유로 인한 서비스 중단에 대해 책임을 지지 않습니다.',
      '비타는 이용자가 제공한 정보의 정확성, 신뢰성 등에 대해 책임을 지지 않습니다.',
      '비타는 이용자가 서비스를 통해 얻은 정보로 인해 발생한 손해에 대해 책임을 지지 않습니다.',
    ],
  },
  {
    title: '제 9 조 (계약 해지)',
    content: [
      '이용자는 언제든지 서비스 탈퇴를 요청할 수 있으며, 비타는 즉시 탈퇴를 처리합니다.',
      '비타는 이용자가 본 약관을 위반한 경우 사전 통지 없이 이용 계약을 해지하거나 서비스 이용을 제한할 수 있습니다.',
    ],
  },
  {
    title: '제 10 조 (기타)',
    content: [
      '본 약관에 명시되지 않은 사항은 관련 법령에 따릅니다.',
      '본 약관은 대한민국 법률에 따라 해석되고 집행됩니다.',
    ],
  },
  {
    title: '부칙',
    content: [
      '본 약관은 2024년 6월 7일부터 시행됩니다.',
      '비타 이용에 관한 궁금한 사항은 고객센터로 문의해 주시기 바랍니다.',
    ],
  },
];
