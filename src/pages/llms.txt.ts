// /llms.txt — llmstxt.org index, generated at build time (live posts only).
import type { APIRoute } from 'astro';
import { SITE, FASTWORK_URL, SOCIALS } from '../config';
import { NAME, SUMMARY, PROFILE, getLivePosts, postUrl, TEXT_HEADERS } from '../llms-profile';

export const GET: APIRoute = async () => {
  const posts = await getLivePosts();
  const lines = [
    `# ${NAME}`,
    '',
    `> ${SUMMARY}`,
    '',
    ...PROFILE.map((p) => `- ${p}`),
    '',
    '## หน้าหลัก',
    '',
    `- [หน้าแรก](${SITE}/): บริการ AI automation และตัวอย่างการทำงาน`,
    `- [เกี่ยวกับ](${SITE}/about/): ประวัติและสิ่งที่กำลังสร้าง`,
    `- [บล็อก](${SITE}/blog/): บทความภาษาไทยเรื่อง AI และระบบอัตโนมัติ`,
    `- [จ้างงานบน Fastwork](${FASTWORK_URL}): สั่งงาน AI automation`,
    '',
    '## บทความ',
    '',
    ...posts.map((p) => `- [${p.title}](${postUrl(p.id)}): ${p.description}`),
    '',
    '## ช่องทางอื่น',
    '',
    ...Object.entries(SOCIALS).map(([k, v]) => `- [${k}](${v})`),
    '',
    '## Optional',
    '',
    `- [llms-full.txt](${SITE}/llms-full.txt): เนื้อหาทั้งหมดของไซต์ในไฟล์เดียว`,
    `- [sitemap.xml](${SITE}/sitemap.xml)`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: TEXT_HEADERS });
};
