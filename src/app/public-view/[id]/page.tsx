export default async function PublicViewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">Public View</h1>
      <p className="mt-4 text-muted-foreground">
        Public view for location ID: {id}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        This page is accessible without authentication.
      </p>
    </div>
  );
}
