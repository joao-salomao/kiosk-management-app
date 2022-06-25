
import { ReactElement, useCallback, useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import SweetAlert from 'sweetalert2';
import { toast } from 'react-toastify';
import { repository } from 'lib/repositories/kiosk';
import { Form, FormFields } from '../partials/form'
import { Kiosk } from 'lib/types';

export const Edit = (): ReactElement => {
  const [kiosk, setKiosk] = useState<Kiosk | null>(null);
  const [isLoadingKiosk, setIsLoadingKiosk] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  const onSubmit = useCallback(async (fields: FormFields) => {
    try {
      const result = await SweetAlert.fire({
        title: `You really want update the Kiosk #${params.kioskId}?`,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: 'No',
        backdrop: false,
        confirmButtonColor: "#1D4ED8",
      });

      if (result.isDismissed || result.isDenied) {
        return toast.info("The changes wasn't persisted.");
      };

      setIsSubmitting(true);

      await repository.update(params.kioskId as string, fields as Kiosk);

      toast.success("Kiosk successfully updated!");
      navigate("/");
    } catch (e) {
      toast.error("Something goes wrong, try again.");
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