import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Customers',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}