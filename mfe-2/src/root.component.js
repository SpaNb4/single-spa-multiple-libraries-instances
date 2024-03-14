// MFE 2
import React from 'react';
import { QueryClient, QueryClientProvider, useQuery, useQueryClient, useMutation } from 'react-query';

const queryClient = new QueryClient();

const fetchData = async () => {
  const response = await fetch('http://localhost:3000/comments/');
  return response.json();
};

function Todos() {
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery({ queryKey: ['todos'], queryFn: fetchData });

  // const mutation = useMutation({
  //   mutationFn: postTodo,
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries({ queryKey: ['todos'] });
  //   },
  // });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <ul>
        {data?.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>

      <button
      // onClick={() => {
      //   mutation.mutate({
      //     id: Date.now(),
      //     title: 'Do Laundry',
      //   });
      // }}
      >
        Add Todo
      </button>
    </div>
  );
}

export default function MFE1() {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <div>
        <h1>MFE 1</h1>
        <Todos />
      </div>
    </QueryClientProvider>
  );
}
