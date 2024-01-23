'use client';
import { useState, useEffect } from 'react';
import { formatURL, isValidURL } from '../app/utils/helperFunctions';
import Link from 'next/link';

export function SearchBar({ urlParam }) {
  const [url, setUrl] = useState(null);
  const [formattedUrl, setFormattedUrl] = useState(null);
  const [error, setError] = useState(null);

  const handleBlur = (event) => {
    const newSearch = event.target.value;
    setUrl(newSearch);
    const newURL = formatURL(newSearch);
    const validUrl = isValidURL(newSearch);
    if (validUrl) {
      setFormattedUrl(newURL);
      setError(null);
    } else {
      invalidUrl();
    }
  };

  const invalidUrl = () => {
    {
      setError('Invalid URL');
    }
  };

  useEffect(() => {
    if (urlParam) {
      setUrl(urlParam);
      setFormattedUrl(urlParam);
    }
  }, [urlParam]);

  return (
    <div className="w-full">
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
          onChange={handleBlur}
          value={url || ''}
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-violet-500 focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
          placeholder="Type Website URL"
          required
        />
        <Link
          href={{
            pathname: '/report',
            query: {
              url: `${formattedUrl}`,
            },
          }}
          className="text-white font-bold absolute right-2.5 bottom-2.5 bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 rounded-lg text-sm px-4 py-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
        >
          Analyze
        </Link>
      </div>
      {error && <span className="text-red-500">Invalid URL</span>}
    </div>
  );
}
