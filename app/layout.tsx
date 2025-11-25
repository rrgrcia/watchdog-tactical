import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';

export const metadata: Metadata = {
  title: 'Watchdog Tactical',
  description: 'AI-powered no-code app builder',
  openGraph: {
    title: 'Watchdog Tactical',
    description: 'AI-powered no-code app builder',
    images: [
      {
        url: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/WTDOG.png',
        type: 'image/png',
      },
    ],
    url: 'https://cbryishwmi4uo.mocha.app',
    type: 'website',
    siteName: 'Watchdog Tactical',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Watchdog Tactical',
    description: 'AI-powered no-code app builder',
    images: ['https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/WTDOG.png'],
  },
  icons: {
    icon: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/WTDOG.png',
    apple: 'https://mocha-cdn.com/019abafc-6196-7ae9-a21f-68e514086f2b/WTDOG.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <WishlistProvider>
            {children}
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}


