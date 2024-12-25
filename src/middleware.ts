import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
import {NextRequest} from 'next/server';
 
const allowedOrigins = ['https://cb.saral.me']
 
const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware(routing);
  const response = handleI18nRouting(request);

  // Check the origin from the request
  let origin = request.headers.get('origin') ?? ''

  if(allowedOrigins.includes("*")){
    origin = "*"
  }

  const isAllowedOrigin = allowedOrigins.includes(origin)

  // Handle preflighted requests
  const isPreflight = request.method === 'OPTIONS'

  if (isPreflight) {
    const preflightHeaders = {
      ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
      ...corsOptions,
    }
    Object.entries(preflightHeaders).forEach(([key, value]) => {
      response.headers.set(key, value)
    })
    return response
  }

  
  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin)
  }
 
  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value)
  })
 
  
  return response;
}
 
export const config = {
  // Match only internationalized pathnames
  matcher: [
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ]
};