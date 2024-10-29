import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";

export default async function HistoryPage() {
  const aiOutputs = await db.select().from(AIOutput);

  return (
    <div className="flex flex-col bg-white m-5 p-5 border rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold">History</h1>
      <p className="text-gray-500 font-sans">Search your previously generated AI content</p>
      <table className="bg-white m-5 p-5 text-left">
        <thead>
          <tr className="bg-gray-100 m-5">
            <th className="p-4 m-4 text-wrap">Template</th>
            <th className="p-4 m-4 text-wrap">Form Data</th>
            <th className="p-4 m-4 text-wrap">AI Response</th>
            <th className="p-4 m-4 text-wrap">Created At</th>
          </tr>
        </thead>
        <tbody>
          {aiOutputs.map((aiOutput) => (
            <tr key={aiOutput.id}>
              <td className="p-4 m-4 text-wrap">{aiOutput.templeteSlug}</td>
              <td className="p-4 m-4 text-wrap">{aiOutput.formData}</td>
              <td className="p-4 m-4 text-wrap">{aiOutput.aiResponse}</td>
              <td className="p-4 m-4 text-wrap">{aiOutput.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
