
import { AiOutlineLoading3Quarters } from 'react-icons/ai'; // Example icon

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <AiOutlineLoading3Quarters className="animate-spin text-4xl mb-4" /> 
      <p>Loading...</p>
    </div>
  );
};

export default LoadingPage;