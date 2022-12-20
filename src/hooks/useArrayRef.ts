import { useRef } from 'react';

export default function useArrayRef() {
  const refs = useRef<HTMLDivElement[] | null>(null);
  refs.current = [];
  return [refs, (ref: HTMLDivElement | any) => ref && refs.current.push(ref)];
}
