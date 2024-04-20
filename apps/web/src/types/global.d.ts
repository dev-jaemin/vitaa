declare global {
  interface Window {
    Kakao: {
      init: (key: string) => void;
      isInitialized: () => boolean;
      Auth: {
        authorize: (setttings: Settings) => void;
      };
    };
  }
}

export {};
