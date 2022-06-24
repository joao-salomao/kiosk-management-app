
import { ReactElement, useCallback, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Form, FormFields } from '../partials/form/Form';
import { Kiosk } from 'lib/types';
import { repository } from 'lib/repositories/kiosk';

export const New = (): ReactElement => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = useCallback(async (fields: FormFields) => {
    setIsSubmitting(true);

    await repository.create(fields as Kiosk);

    setIsSubmitting(false);
    toast.success("Kiosk successfully created!", { type: 'success' });
    navigate("/");

  }, [navigate]);

  return <div>
    <Form
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
    />
  </div>
}