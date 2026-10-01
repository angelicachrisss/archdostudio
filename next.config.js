/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    // Izinkan foto yang masih disimpan di WordPress. Hapus jika semua foto sudah ada di /public.
    remotePatterns: [{ protocol: 'https', hostname: 'jonathan7cbc389f6d.wordpress.com', pathname: '/wp-content/uploads/**' }],
  },
};
