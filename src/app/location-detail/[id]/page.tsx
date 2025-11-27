export default async function LocationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">Location Detail</h1>
      <p className="mt-4 text-muted-foreground">
        Viewing details for location ID: {id}
      </p>
    </div>
  );
}
