const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://avocado-next-ecru.vercel.app'; // Cambiará dependiendo de la variable de entorno NODE_ENV
