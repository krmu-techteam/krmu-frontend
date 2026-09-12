

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditFacultyPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <main className="container mx-auto max-w-3xl py-10">
      <h1 className="mb-8 text-3xl font-bold">Edit Faculty</h1>

      {/* <FacultyEdit id={id} /> */}
    </main>
  );
}
