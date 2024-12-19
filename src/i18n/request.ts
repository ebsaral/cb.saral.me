import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
import { notFound } from 'next/navigation';
 
export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  const locale = await requestLocale;
 
  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound()
  }
 
  return {
    timeZone: "Atlantic/St_Helena",
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});