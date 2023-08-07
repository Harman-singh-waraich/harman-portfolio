"use client";

import Error from "./error";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="text-white"> hi</div>
        <Error error={error} reset={reset} />
      </body>
    </html>
  );
}
