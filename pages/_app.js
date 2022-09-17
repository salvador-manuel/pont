import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import MainLayout from '../layouts/MainLayout';

// Rainbow Kit
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
const { chains, provider } = configureChains(
    [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum, chain.polygonMumbai],
    [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);
const { connectors } = getDefaultWallets({
    appName: 'Pont',
    chains,
});
const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
});

// Client-side cache shared for the whole session
// of the user in the browser.

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
                <CacheProvider value={emotionCache}>
                    <Head>
                        <meta name="viewport" content="initial-scale=1, width=device-width" />
                        <link rel="icon" href="/favicon.ico" />
                        <title>Pont</title>
                    </Head>
                    <ThemeProvider theme={theme}>
                        {/* CssBaseline kickstart an elegant,
				consistent, and simple baseline to
            build upon. */}
                        <CssBaseline />
                        <MainLayout>
                            <Component {...pageProps} />
                        </MainLayout>
                    </ThemeProvider>
                </CacheProvider>
            </RainbowKitProvider>
        </WagmiConfig>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};
