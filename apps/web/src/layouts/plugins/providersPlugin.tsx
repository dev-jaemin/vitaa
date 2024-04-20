import { AuthProvider } from '../../providers/AuthProvider';

declare global {
  interface StackProps {
    stack: {
      render: () => React.ReactNode;
    };
  }
}

/**
 * 전역적으로 필요한 Provider들 모아놓은 Stackflow 플러그인
 * stack의 타입은 정의할 수 없어서 declare global로 선언
 */
export function providersPlugin() {
  return {
    key: 'providers-plugin',
    wrapStack({ stack }: StackProps) {
      return <AuthProvider>{stack.render()}</AuthProvider>;
    },
  };
}
