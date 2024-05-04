import { LayoutItem } from './LayoutItem';
import { Wrapper } from './Wrapper';

export function StackLayout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <LayoutItem id="webview-root">{children}</LayoutItem>
    </Wrapper>
  );
}
