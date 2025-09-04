export default async function UserDetails(props: PageProps<'/admin/users/[id]'>) {
  const { params } = props;
  const { id } = await params;

  return (
    <div>User Details Page - {id}</div>
  );
}