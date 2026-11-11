// /llms-full.txt — profile summary + full markdown body of every live post.
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
    '## โปรไฟล์',
    '',
    ...PROFILE.map((p) => `- ${p}`),
    '',
    '## ลิงก์',
    '',
    `- หน้าแรก: ${SITE}/`,
    `- เกี่ยวกับ: ${SITE}/about/`,
    `- บล็อก: ${SITE}/blog/`,
    `- จ้างงานบน Fastwork: ${FASTWORK_URL}`,
    ...Object.entries(SOCIALS).map(([k, v]) => `- ${k}: ${v}`),
    '',
    '## บทความ',
    '',
    ...posts.flatMap((p) => [
      `### ${p.title}`,
      '',
      `URL: ${postUrl(p.id)}`,
      `วันที่: ${p.date}`,
      '',
      p.body,
      '',
      '---',
      '',
    ]),
  ];
  return new Response(lines.join('\n'), { headers: TEXT_HEADERS });
};
