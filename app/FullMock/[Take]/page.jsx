// app/FullMock/[Take]/page.js
import Mock_Fetch_Data from '@/module/Mock_Fetch_Data';
import MockTest from '@/components/chat/mock/mockSection'

export async function generateStaticParams() {
  const data = await Mock_Fetch_Data(); // Fetch your data
  return data.map((item) => ({
    Take: item.id.toString(), // Ensure 'Take' matches the dynamic route param
  }));
}

const FullMockPage = async ({ params }) => {
  const { Take } = params;

  // Fetch user data
  const data = await Mock_Fetch_Data();

  const mock = data.find((item) => item.id.toString() === Take);

  if (!mock) {
    return <div className="text-center text-gray-500 mt-10">Mock not found</div>;
  }

  return (
 
    
       <MockTest Propsdata={mock}/>
  
  );
};

export default FullMockPage;
