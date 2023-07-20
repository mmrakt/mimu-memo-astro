export const onRequest = ({ url: { pathname }, redirect }, next) => {
  const path = pathname.replace(/\/$/, '')
  if (path === '') {
    return redirect('/page/1')
  } else if (path === '/page') {
    return redirect('/page/1')
  } else if (path === '/owned' || path === '/owned/page') {
    return redirect('/owned/page/1')
  }
  next()
}

// import { defineMiddleware } from 'astro/middleware'

// // `context` and `next` are automatically typed
// export const onRequest = defineMiddleware(({ url, redirect }, next) => {
//   if (url.pathname.endsWith('.html')) {
//     return redirect(url.pathname.replace('.html', ''))
//   }
//   next()
// })
