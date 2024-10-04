import './globals.css';

export const metadata = {
  title: 'Next Level Training',
  description: 'Next.js Authentication',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
