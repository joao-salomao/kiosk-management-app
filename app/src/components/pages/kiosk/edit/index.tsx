
import { ReactElement, useCallback, useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { repository } from 'lib/repositories/kiosk';
import { Form, FormFields } from '../partials/form/Form';
import { Kiosk } from 'lib/types';

export const Edit = (): ReactElement => {
  const [kiosk, setKiosk] = useState<Kiosk | null>(null);
  const [isLoadingKiosk, setIsLoadingKiosk] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  const onSubmit = useCallback(async (fields: FormFields) => {
    try {
      setIsSubmitting(true);

      await repository.update(params.kioskId as string, fields as Kiosk);

      toast.success("Kiosk successfully updated!", { type: 'success' });
      navigate("/");
    } catch (e) {
      toast.success("Something goes wrong, try again.", { type: 'error' });
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }



  }, [params.kioskId, navigate]);


  const loadKiosk = useCallback(async () => {
    setIsLoadingKiosk(true);

    const kioskData = await repository.find(params.kioskId as string);

    setIsLoadingKiosk(false);
    setKiosk(kioskData);
  }, [params.kioskId]);

  useEffect(() => {
    loadKiosk();
  }, [loadKiosk]);

  return <div>
    {isLoadingKiosk && (<div>Carregando</div>)}
    {
      !isLoadingKiosk && (
        <Form
          title={`Edit Kiosk #${kiosk?.id}`}
          formData={kiosk as FormFields}
          isSubmitting={isSubmitting}
          onSubmit={onSubmit}
        />
      )
    }

  </div>
}