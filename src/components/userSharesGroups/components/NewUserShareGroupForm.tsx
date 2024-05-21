'use client';

import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Button } from '@/lib/button/Button';
import { FiPlus } from 'react-icons/fi';
import { Input } from '@/lib/input/Input';
import { createUserShareGroup } from '../services/createUserShareGroup';
import { ZodIssue } from 'zod';

export const NewUserShareGroupForm: FC<{ userId: string }> = ({ userId }) => {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ZodIssue[] | undefined>(undefined);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target as HTMLFormElement);
    const result = await createUserShareGroup(undefined, formData);
    setLoading(false);

    if (result.errors) {
      setErrors(result.errors);
    } else {
      setInputValue('');
      setErrors(undefined);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const firstError = errors && errors[0]?.message;

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input type="hidden" value={userId} name="userId" />
      <Input
        name="name"
        value={inputValue}
        onChange={handleChange}
        error={!!firstError}
        hint={firstError}
        disabled={loading}
      />
      <Button variant="text" type="submit" disabled={loading}>
        {loading ? (
          'Adding...'
        ) : (
          <>
            <FiPlus /> Add Shares Group
          </>
        )}
      </Button>
    </form>
  );
};
