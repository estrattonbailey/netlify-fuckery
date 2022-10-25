export const handler = () => {
  console.log('redirect!')
  return {
    status: 302,
    headers: {
      Location: 'https://github.com/front-of-house/presta',
    },
  }
}
