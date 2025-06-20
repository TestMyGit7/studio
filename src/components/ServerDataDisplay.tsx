import { CardDescription } from "@/components/ui/card";

// Simulate fetching data on the server
async function fetchData() {
  // In a real app, this could be:
  // const response = await fetch('https://api.example.com/data');
  // if (!response.ok) throw new Error('Failed to fetch data');
  // return response.json();
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500)); 
  
  return {
    message: "Data successfully fetched on the server!",
    timestamp: new Date().toISOString(),
    items: [
      { id: 1, name: "Server Item A", value: Math.floor(Math.random() * 100) },
      { id: 2, name: "Server Item B", value: Math.floor(Math.random() * 100) },
    ]
  };
}

export default async function ServerDataDisplay() {
  const data = await fetchData();

  return (
    <div className="space-y-2">
      <p className="text-lg font-semibold">{data.message}</p>
      <p className="text-sm text-muted-foreground">Fetched at: {new Date(data.timestamp).toLocaleTimeString()}</p>
      <ul className="list-disc list-inside pl-4 space-y-1">
        {data.items.map(item => (
          <li key={item.id}>{item.name} - Value: {item.value}</li>
        ))}
      </ul>
      <CardDescription className="text-xs text-muted-foreground pt-2">
        This data is fetched on the server. Next.js App Router encourages server-side data fetching for improved performance. 
        While Axios was requested for data fetching, Next.js primarily uses the built-in `fetch` API for server components and route handlers. 
        Axios can still be used for client-side requests or in Node.js environments if preferred, after installing it (`npm install axios`).
      </CardDescription>
    </div>
  );
}
