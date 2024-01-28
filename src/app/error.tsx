'use client'
 
export default function Error({
  error
}: {
  error: Error & { digest?: string }
}) {
  
 
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <h2>{error.message}</h2>
    </div>
  )
}