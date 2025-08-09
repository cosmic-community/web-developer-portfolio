'use client'; // This directive is needed for error.tsx files to work as client components

export default function Error() {
  return (
    <div className="flex justify-center items-center h-screen">
      <span className="text-xl font-bold text-red-500">An unexpected error occurred. Please try again later.</span>
    </div>
  )
}