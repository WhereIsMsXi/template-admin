import { useRouter } from 'vue-router';

const router = useRouter();

export function back() {
  router.back();
}
export function goHome() {
  router.push({ path: '/' });
}
