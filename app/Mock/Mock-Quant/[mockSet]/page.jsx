// app/FullMock/[Take]/page.js
import MockTest from '@/components/chat/mock/mockSection'
import FETCHDATA from '@/module/fetchdata'
import Mock_Fetch_Data from '@/module/Mock_Fetch_Data'
import Link from 'next/link'
export async function generateStaticParams() {
  const data = await FETCHDATA('/Quant'); // Fetch your data
 //  console.log(data)
  return data.map((item) => (
    {
    mockSet: item.id.toString(), // Ensure 'Take' matches the dynamic route param
  }
                 
  ));
}

const FullMockPage = async ({ params }) => {
  const { mockSet } = params;

  // Fetch user data
  const questions = await Mock_Fetch_Data(`Quant/${mockSet}/Questions`)

  if (!questions) {
    return <div className="text-center text-gray-500 mt-10">Mock not found</div>;
  }

  return (
 

    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Mock Questions</h1>

      {questions.length === 0 ? (
        <p>No mock questions found.</p>
      ) : (
        <ul className="space-y-4">
          {questions.map((question, index) => (
            <li
              key={question.id}
              className="p-4 border rounded-md shadow-md hover:bg-gray-50 transition"
            >
              <h2 className="text-lg font-semibold">
                {question.id}. <button className=''> Attempt Mock {question.id} <Link href={`/FullMock/${mockSet}/${question.id}`} > Click</Link></button>
              </h2>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FullMockPage;
