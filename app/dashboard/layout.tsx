import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="max-w-md md:max-w-3xl mx-auto mt-24">{children}</div>;
}
