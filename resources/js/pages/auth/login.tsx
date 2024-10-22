import { Link, useForm, Head } from '@inertiajs/react';
import classNames from 'classnames';
import React from 'react';
import useRoute from '@/hooks/use-route';
import AuthenticationCard from '@/components/cards/authentication-card';
import Checkbox from '@/components/forms/checkbox';
import InputLabel from '@/components/forms/input-label';
import PrimaryButton from '@/components/buttons/primary-button';
import TextInput from '@/components/forms/text-input';
import InputError from '@/components/forms/input-error';
import FormControl from '@/components/forms/form-control';
import FormControlCheckbox from '@/components/forms/form-control-checkbox';

interface Props {
  canResetPassword: boolean;
  status: string;
}

export default function Login({ canResetPassword, status }: Props) {
  const route = useRoute();
  const form = useForm({
    email: 'admin@mail.com',
    password: 'password',
    remember: '',
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    form.post(route('login'), {
      onFinish: () => form.reset('password'),
    });
  }

  return (
    <AuthenticationCard>
      <Head title="Login" />

      {status && (
        <div className="mb-4 font-medium text-sm text-green-600">{status}</div>
      )}

      <form onSubmit={onSubmit}>
        <div className="space-y-2">
          <FormControl
            label="Username"
            isRequired
            errorMessage={form.errors.email}
          >
            <TextInput
              id="email"
              type="email"
              className="mt-1 block w-full"
              value={form.data.email}
              onChange={e => form.setData('email', e.currentTarget.value)}
              required
              autoFocus
            />
          </FormControl>

          <FormControl
            label="Password"
            isRequired
            errorMessage={form.errors.password}
          >
            <TextInput
              id="password"
              type="password"
              className="mt-1 block w-full"
              value={form.data.password}
              onChange={e => form.setData('password', e.currentTarget.value)}
              required
              autoComplete="current-password"
            />
          </FormControl>

          <FormControlCheckbox label="Remmember Me">
            <Checkbox
              name="remember"
              checked={form.data.remember === 'on'}
              onChange={e =>
                form.setData('remember', e.currentTarget.checked ? 'on' : '')
              }
            />
          </FormControlCheckbox>
        </div>

        <div className="mt-4">
          <PrimaryButton
            className={classNames('btn-block', {
              'opacity-25': form.processing,
            })}
            disabled={form.processing}
          >
            Log in
          </PrimaryButton>
        </div>

        <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0 mt-4">
          {canResetPassword && (
            <div>
              <Link
                href={route('password.request')}
                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Forgot your password?
              </Link>
            </div>
          )}

          <div className="flex items-center justify-end">
            <Link
              href={route('register')}
              className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Need an account?
            </Link>
          </div>
        </div>
      </form>
    </AuthenticationCard>
  );
}
