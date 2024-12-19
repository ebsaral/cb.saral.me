'use client';
 
import {useTranslations} from 'next-intl';
 
export default function Error() {
  const t = useTranslations('Pages.NotFound');
 
  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  );
}