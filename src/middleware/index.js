export const onRequest = ({ url: { pathname }, redirect }, next) => {
  const path = pathname.replace(/\/$/, '')
  if (path === '') {
    return redirect('/page/1')
  } else if (path === '/page') {
    return redirect('/page/1')
  } else if (path === '/owned' || path === '/owned/page') {
    return redirect('/owned/page/1')
  } else if (path === '/qiita' || path === '/qiita/page') {
    return redirect('/qiita/page/1')
  } else if (path === '/zenn' || path === '/zenn/page') {
    return redirect('/zenn/page/1')
  }
  next()
}
