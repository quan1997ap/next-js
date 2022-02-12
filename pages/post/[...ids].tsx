import { route } from 'next/dist/server/router';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface DetailPageProps {
}

export default function DetailPage (props: DetailPageProps) {

  const route = useRouter();

  console.log(route)
  return (
    <div>
      {JSON.stringify(route)}
    </div>
  );
}
