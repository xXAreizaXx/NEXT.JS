'use client';

// NextJS
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// External Dependencies
import clsx from 'clsx';

// Icons
import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon, } from '@heroicons/react/24/outline';
 
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];
 
export default function NavLinks() {
  // Navigation
  const pathname = usePathname();
 
  return (
    links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
            {
              'bg-sky-100 text-blue-600': pathname === link.href,
            },
          )}
        >
          <link.icon className="w-6" />
          
          <p className="hidden md:block">{link.name}</p>
        </Link>
      ))
  );
}