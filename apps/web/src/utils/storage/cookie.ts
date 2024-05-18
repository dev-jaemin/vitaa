//쿠키 값 가져오는 함수
function get_cookie(name: string) {
  const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return value ? value[2] : null;
}

//쿠키 삭제하는 함수
function delete_cookie(name: string) {
  document.cookie = encodeURIComponent(name) + '=; expires=Thu, 01 JAN 1999 00:00:10 GMT';
}

export { get_cookie, delete_cookie };
