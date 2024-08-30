import { useRouter } from 'vue-router';
export function routerHook() {
  const router = useRouter();

  function goHome() {
    router.push('/dashboard');
  }

  return { goHome };
}
