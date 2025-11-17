/** @type {import('next').NextConfig} */
const nextConfig = {
  // Permite exportar build standalone
  output: "standalone",

  // Outras configurações que você já precise, se tiver
  reactStrictMode: true,

  // Se estiver usando imagens externas, pode configurar domains
  images: {
    domains: [],
  },
};

module.exports = nextConfig;