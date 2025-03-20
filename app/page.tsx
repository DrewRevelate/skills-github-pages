import { Metadata } from 'next';
import HomePage from './components/HomePage';

export const metadata: Metadata = {
  title: 'Full Throttle Revenue: How RevOps & Automation Drive Success',
  description: 'Interactive F1-themed presentation on Revenue Operations and Automation for business students',
};

export default function Home() {
  return <HomePage />;
}
