import * as React from 'react';
import { AppProps } from 'next/app';
import { EmotionCache } from '@emotion/react';
import createEmotionCache from '../createEmotionCache';
import Layout from '@/components/Layout';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <Layout emotionCache={emotionCache}>
        <Component {...pageProps} />
    </Layout>
  );
}