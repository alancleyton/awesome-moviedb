import { ReactNode } from 'react';

interface LoaderProps {
  children: ReactNode;
  isLoading?: boolean;
}

export const Loader = ({ children, isLoading = false }: LoaderProps) => {
  if (isLoading)
    return (
      <div
        id="loading"
        className="flex justify-center items-center h-14"
        role="alert"
        aria-busy
      >
        <div className="flex flex-row gap-2">
          <div className="animate-bounce">
            <div className="w-5 h-5 rounded-full bg-gray-50 animate-pulse" />
          </div>

          <div className="animate-bounce [animation-delay:-.3s]">
            <div className="w-5 h-5 rounded-full bg-gray-50 animate-pulse [animation-delay:-.3s]" />
          </div>

          <div className="animate-bounce [animation-delay:-.3s]">
            <div className="w-5 h-5 rounded-full bg-gray-50 animate-pulse [animation-delay:-.3s]" />
          </div>
        </div>
      </div>
    );

  return <>{children}</>;
};
