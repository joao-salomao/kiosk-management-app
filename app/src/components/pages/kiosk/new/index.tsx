
import { ReactElement, useCallback, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Form, FormFields } from '../partials/form/Form';
import { Kiosk } from 'lib/types';
import { repository } from 'lib/repositories/kiosk';

export const New = (): ReactElement => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async (fields: FormFields) => {
    setIsLoading(true);

    await repository.create(fields as Kiosk);

    setIsLoading(false);
    toast.success("Kiosk successfully created!", { type: 'success' });
    navigate("/");

  }, [navigate]);

  return <div>
    <Form
      onSubmit={onSubmit}
      isLoading={isLoading}
    />
  </div>
}