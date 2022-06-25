import { ReactElement } from "react";

export type SearchInputProps = {
  name: string;
  value?: string;
  onChange: (value: string) => void;
}

export const SearchInput = ({ name, value, onChange }: SearchInputProps): ReactElement => {
  return (
    <>
      <label htmlFor={name}>Search</label><br />
      <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </div>
        <input
          type="text"
          value={value}
          name={name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2"
          onChange={event => onChange(event.target.value)}
        />
      </div>
    </>
  );
}