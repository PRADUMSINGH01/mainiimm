import { FiSmartphone, FiMonitor } from "react-icons/fi";

// Add this component at the top of your file
const MobileMessage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md text-center bg-white rounded-xl shadow-lg p-8">
        <div className="flex justify-center text-4xl text-red-600 mb-4">
          <FiSmartphone />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Desktop Experience Required
        </h1>
        <p className="text-gray-600 mb-6">
          For optimal performance and the best testing experience, please access
          this contest from a desktop or tablet device.
        </p>
        <div className="flex items-center justify-center gap-2 text-blue-600">
          <FiMonitor className="text-xl" />
          <span className="font-medium">
            Switch to a larger screen to continue
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileMessage;
