import React, { PropsWithChildren } from 'react';
import Modal, { ModalProps } from '@/components/modals/modal';

DialogModal.Content = function DialogModalContent({
  title,
  children,
}: PropsWithChildren<{ title: string }>) {
  return (
    <div className="px-6 py-4">
      <div className="text-lg font-medium text-gray-900">
        {title}
      </div>

      <div className="mt-4 text-sm text-gray-600">
        {children}
      </div>
    </div>
  );
};

DialogModal.Footer = function DialogModalFooter({
  children,
}: PropsWithChildren<Record<string, unknown>>) {
  return (
    <div className="px-6 py-4 bg-gray-100 text-right">
      {children}
    </div>
  );
};

export default function DialogModal({
  children,
  ...modalProps
}: PropsWithChildren<ModalProps>) {
  return <Modal {...modalProps}>{children}</Modal>;
}
