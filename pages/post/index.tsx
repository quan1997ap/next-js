import Link from 'next/link';
import * as React from 'react';
import { useRouter } from 'next/router'

export interface PostListPageProps {
}

export default function PostListPage (props: PostListPageProps) {
  const router = useRouter()
  return (
    <div>
        <div>
          <Link href="/about">
            <a>Go to about</a>
          </Link>
        </div>
        <div>
          <button onClick={() => router.push('/about')}>
            <a>Click Go to about</a>
          </button>
        </div>
    </div>
  );
}
