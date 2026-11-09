/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // เพิ่มบรรทัดนี้
  // ถ้าระบบของคุณ Deploy ไปที่ https://<username>.github.io/<repo-name>/ 
  // ต้องใส่ basePath และ assetPrefix ด้วย (ถ้าเป็น https://<username>.github.io ไม่ต้องใส่)
  // basePath: '/ชื่อ-repo-ของคุณ',
  // assetPrefix: '/ชื่อ-repo-ของคุณ/',
  images: {
    unoptimized: true, // สำคัญมาก เพราะ GitHub Pages ไม่รองรับ Next.js Image Optimization แบบ Dynamic
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
