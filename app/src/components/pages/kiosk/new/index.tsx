
import { ReactElement, useCallback, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Form, FormFields } from '../partials/form'
import { Kiosk } from 'lib/types';
import { repository } from 'lib/repositories/kiosk';

export const New = (): ReactElement => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = useCallback(async (fields: FormFields) => {
    try {
      setIsSubmitting(true);

      await repository.create(fields as Kiosk);

      toast.success("Kiosk successfully created!");
      navigate("/");
    } catch (e) {
      console.error(e);
      toast.error("Something goes wrong, try again.");
    } finally {
      setIsSubmitting(false);
    }
  }, [navigate]);

  return <div>
    <Form
      title='New Kiosk'
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
    />
  </div>
}