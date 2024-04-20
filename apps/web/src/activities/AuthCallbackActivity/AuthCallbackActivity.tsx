export const AuthCallbackActivity = () => {
  const params = new URL(document.URL).searchParams;
  const code = params.get('code');

  return <div>{code}</div>;
};
