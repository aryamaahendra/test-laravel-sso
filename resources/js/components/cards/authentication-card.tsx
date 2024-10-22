import React, { PropsWithChildren } from 'react';
import AuthenticationCardLogo from '@/components/cards/authentication-card-logo';

export default function AuthenticationCard({
  children,
}: PropsWithChildren<Record<string, unknown>>) {
  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
      <div className="card bg-base-100 w-full max-w-sm border shadow-md">
        <div className="card-body !p-6">{children}</div>
      </div>
    </div>
  );
}
