export default async function Home() {
  const response = await fetch('http://backend:3000/');
  const users = await response.json();

  return (
    <div>
      <h1>Users</h1>
      {users && users.map((user, i) => (<div key={i}>{user.name + i}</div>))}
    </div>
  )
}
