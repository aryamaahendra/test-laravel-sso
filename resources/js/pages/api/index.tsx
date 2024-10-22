import React from 'react';
import APITokenManager from '@/pages/api/partials/api-token-manager';
import AppLayout from '@/layouts/app-layout';
import { ApiToken } from '@/types';

interface Props {
  tokens: ApiToken[];
  availablePermissions: string[];
  defaultPermissions: string[];
}

export default function ApiTokenIndex({
  tokens,
  availablePermissions,
  defaultPermissions,
}: Props) {
  return (
    <AppLayout
      title={'API Tokens'}
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          API Tokens
        </h2>
      )}
    >
      <div>
        <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
          <APITokenManager
            tokens={tokens}
            availablePermissions={availablePermissions}
            defaultPermissions={defaultPermissions}
          />
        </div>
      </div>
    </AppLayout>
  );
}
