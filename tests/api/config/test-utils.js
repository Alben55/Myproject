export function generateUniqueCredentials() {
  const timestamp = Date.now();
  return {
    email: `user_${timestamp}@test.com`,
    username: `user_${timestamp.toString(36).slice(-8)}`
  };
}