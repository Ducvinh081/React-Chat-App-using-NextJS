import Image from 'next/image';
import AuthForm from './components/AuthForm';

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-[url('/images/background_LR.jpg')] bg-[length:100%_100%] bg-center-bottom bg-no-repeat h-screen ">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt='Logo'
          height={100}
          width={100}
          className='mx-auto w-auto rounded-full'
          src="/images/logo.png" />
      </div>
      <AuthForm />
    </div>
  )
}
