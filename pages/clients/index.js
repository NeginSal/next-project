import Link from 'next/link';

function ClientsPage() {
  const clients = [
    { id: 'max', name: 'Maximilian' },
    { id: 'negin', name: 'Negin' },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;

// import Link from "next/link";

// const ClientsPage = () => {
//     const clients = [
//         { id: "max", name: "Maximilian" },
//         { id: "negin", name: "Negin" },
//     ];
//     return (
//         <div>
//             <h1>The clients page</h1>
//             <ul>
//                 {clients.map((client) => {
//                     <li key={client.id}>
//                         <Link href={`/clients/${client.id}`}>{client.name}</Link>
//                     </li>

//                 })}
//             </ul>
//         </div>
//     );
// }

// export default ClientsPage;