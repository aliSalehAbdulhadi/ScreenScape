import LandingPage from '@/src/components/LandingPage/LandingPage';

const page = async () => {
  return (
    <div className="min-h-[90vh] text-white">
      {/* @ts-expect-error Server Component */}
      <LandingPage />
    </div>
  );
};

export default page;
