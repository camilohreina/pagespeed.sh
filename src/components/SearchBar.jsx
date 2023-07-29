"use client";
import { useState } from "react";
import { formatURL, isValidURL } from "../app/utils/helperFunctions";

export function SearchBar() {
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);

  const handleBlur = (event) => {
    const newSearch = event.target.value;
    const newURL = formatURL(newSearch);
    const validUrl = isValidURL(newSearch);
    if (validUrl) {
      setUrl(newURL);
      setError(null);
    } else {
      invalidUrl();
    }
  };

  const invalidUrl = () => {
    {
      setError("Invalid URL");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (url) {
      setError(null);
      window.location.href = `/report?url=${url}`;
    } else {
      invalidUrl();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          onBlur={handleBlur}
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Type Website URL"
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
      {error && <span className="text-red-500">Invalid URL</span>}
    </form>
  );
}
