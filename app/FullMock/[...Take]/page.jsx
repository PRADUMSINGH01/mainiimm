import Mock_Fetch_Data from "@/module/Mock_Fetch_Data";
import MockTest from "@/components/chat/mock/mockSection";

export async function generateStaticParams() {
  // Define the categories you want to generate paths for
  const categories = [
    "Averages",
    "algebra",
    "Geometry",
    "percentages",
    "Number-System",
    "Interest",
    "Time-work",
    "Geometry",
    "Trigonometry",
    "Permutation-Combination",
    "Probability",
    "Logarithms",
    "Linear-Equations",
    "Quadratic-equations",
    "Functions-and-Graphs",
    "Inequalities",
    "Mean-mode-median",
  ]; // Add more as needed

  const paths = [];

  for (const category of categories) {
    const data = await Mock_Fetch_Data(`Quant/${category}/Questions`);
    const categoryPaths = data.map((item) => ({
      Take: [category, item.id.toString()], // Generate the paths dynamically
    }));

    paths.push(...categoryPaths);
  }

  return paths;
}

const FullMockPage = async ({ params }) => {
  const { Take } = params;

  // Extract the key part of the route
  const category = Take[0]; // e.g., 'Averages'
  const id = Take[1]; // e.g., '1'

  // Fetch data for the specific category
  const data = await Mock_Fetch_Data(`Quant/${category}/Questions`);
  const mock = data.find((item) => item.id.toString() === id);

  if (!mock) {
    return (
      <div className="text-center text-gray-500 mt-10">Mock not found</div>
    );
  }

  return <MockTest Propsdata={mock} />;
};

export default FullMockPage;
