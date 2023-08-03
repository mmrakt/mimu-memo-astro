export const onRequest = ({ url: { pathname }, redirect }, next) => {
  const path = pathname.replace(/\/$/, '')

  switch (path) {
    case '':
    case '/page':
      return redirect('/page/1')
    case '/owned':
    case '/owned/page':
      return redirect('/owned/page/1')
    case '/qiita':
    case '/qiita/page':
      return redirect('/qiita/page/1')
    case '/zenn':
    case '/zenn/page':
      return redirect('/zenn/page/1')
    case '/note':
    case '/note/page':
      return redirect('/note/page/1')
  }
  next()
}
