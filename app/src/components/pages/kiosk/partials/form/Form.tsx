import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { Kiosk } from "lib/types";

export type FormFields = Partial<Omit<Kiosk, 'id'>>;
export type FormProps = {
  formData?: FormFields,
  isSubmitting: boolean,
  onSubmit: (fields: FormFields) => void
};

const RequiredFieldMessage = () => (<div> This field is required</div>);

export const Form = ({ formData = {}, isSubmitting, onSubmit }: FormProps): ReactElement => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormFields>({
    defaultValues: formData
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <label htmlFor="serialKey">Serial Key:</label><br />
        <input
          type="text"
          className="border border-gray-300"
          placeholder="Ex: 123-NZD-123"
          {...register("serialKey", { required: true })}
        />
        {errors.serialKey && <RequiredFieldMessage />}
      </div>

      <div className="mb-6">
        <label htmlFor="description">Description:</label><br />
        <textarea
          rows={2}
          cols={33}
          className="border border-gray-300"
          {...register("description", { required: true })}
        />
        {errors.description && <RequiredFieldMessage />}
      </div>

      <div className="mb-6">
        <label htmlFor="isKioskClosed" className="mr-2">Is closed?</label>
        <input
          type="checkbox"
          className="border border-gray-300"
          defaultValue="false"
          {...register("isKioskClosed")}
        />
      </div>

      <div className="mb-6">
        <div className="flex">
          <div className="mr-4">
            <label htmlFor="storeOpensAt">Store opens at:</label><br />
            <input
              type="time"
              className="border border-gray-300"
              {...register("storeOpensAt", { required: true })}
            />
          </div>
          <div>
            <label htmlFor="storeClosesAt">Store closes at:</label><br />
            <input
              type="time"
              className="border border-gray-300"
              {...register("storeClosesAt", { required: true })}
            />
          </div>
        </div>
        {(errors.storeOpensAt || errors.storeClosesAt) && <RequiredFieldMessage />}
      </div>

      <button type="submit">
        {isSubmitting ? 'Saving' : 'Save'}
      </button>

    </form>
  )
}