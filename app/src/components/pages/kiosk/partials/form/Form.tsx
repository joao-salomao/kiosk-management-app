import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { Kiosk } from "lib/types";

export type FormFields = Partial<Omit<Kiosk, 'id'>>;
export type FormProps = {
  formData?: FormFields,
  isSubmitting: boolean,
  onSubmit: (fields: FormFields) => void
};

const RequiredFieldMessage = () => (<div className="text-red-700"> This field is required</div>);

export const Form = ({ formData = {}, isSubmitting, onSubmit }: FormProps): ReactElement => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormFields>({
    defaultValues: formData
  });

  return (
    <div className="flex flex-col justify-center">
      <div style={{ width: 900 }} className="mx-auto shadow-lg rounded p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label htmlFor="serialKey" className="block mb-2 text-sm font-medium text-gray-900">Serial Key:</label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Ex: 123-NZD-123"
              {...register("serialKey", { required: true })}
            />
            {errors.serialKey && <RequiredFieldMessage />}
          </div>

          <div className="mb-6">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description:</label>
            <textarea
              rows={2}
              cols={33}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              {...register("description", { required: true })}
            />
            {errors.description && <RequiredFieldMessage />}
          </div>

          <div className="mb-6">
            <label htmlFor="isKioskClosed" className="block text-sm font-medium text-gray-900 mb-2">Is closed?</label>
            <label className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" {...register("isKioskClosed")} />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="mb-6">
            <div className="flex">
              <div className="mr-4">
                <label htmlFor="storeOpensAt" className="block mb-2 text-sm font-medium text-gray-900">Store opens at:</label>
                <input
                  type="time"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  {...register("storeOpensAt", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="storeClosesAt" className="block mb-2 text-sm font-medium text-gray-900">Store closes at:</label>
                <input
                  type="time"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  {...register("storeClosesAt", { required: true })}
                />
              </div>
            </div>
            {(errors.storeOpensAt || errors.storeClosesAt) && <RequiredFieldMessage />}
          </div>


          <button
            type="submit"
            className="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none h-10 mt-auto"
          >
            {isSubmitting ? 'Saving' : 'Save'}
          </button>

        </form>
      </div>
    </div>
  )
}