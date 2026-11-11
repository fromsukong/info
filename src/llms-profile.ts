// Shared copy for /llms.txt and /llms-full.txt (Thai-only site).
// Keep numbers exactly as the owner states them. No phone/email, ever.
import { getCollection } from 'astro:content';
import { SITE, isPostLive } from './config';

export const NAME = 'Supakone Kongprapan (@fromsukong)';

export const SUMMARY =
  'Supakone Kongprapan (@fromsukong) เป็น software engineer มืออาชีพที่ทำงานเต็มเวลา และรับงานฟรีแลนซ์ด้านระบบ AI อัตโนมัติ (AI automation) ผ่าน Fastwork เว็บไซต์นี้เป็นภาษาไทย';

export const PROFILE: string[] = [
  'ทำงานเต็มเวลาเป็น software engineer และเป็น 1 ใน 5 อันดับแรกของนักพัฒนาที่มี contribution มากที่สุดในระดับองค์กร',
  'ในงานประจำ ทำโปรเจกต์ agents memory และ AI factory ช่วยพัฒนาการทำงานร่วมกันและความเร็วของทีมเพิ่มขึ้นมากกว่า 20%',
  'สร้าง AI factory ควบคุมคุณภาพของงาน AI ในโปรเจกต์ส่วนตัว ทำงานได้มากกว่า 30 ชิ้นในตอนที่หลับ ควบคู่กับการทำงานเต็มเวลา และกำลังทำ opensource สำหรับวางแผนการเงิน',
  'โปรเจกต์ที่หลงใหลคือ AI สำหรับการวางแผนการเงิน (AI for financial planning) ตอนนี้กำลังหางานฟรีแลนซ์เพื่อหาทุนมาต่อยอดโปรเจกต์นี้',
  'รับงาน AI automation เช่น แชตบอท LINE ระบบถามตอบความรู้ในทีม การเชื่อมต่อ API และระบบติดตามลูกค้า (follow-up) ผ่าน Fastwork',
];

export type LivePost = { id: string; title: string; description: string; date: string; body: string };

export async function getLivePosts(): Promise<LivePost[]> {
  const posts = (await getCollection('blog'))
    .filter(isPostLive)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return posts.map((p) => ({
    id: p.id,
    title: p.data.title,
    description: p.data.description,
    date: p.data.pubDate.toISOString().slice(0, 10),
    body: (p.body ?? '').trim(),
  }));
}

export const postUrl = (id: string) => `${SITE}/blog/${id}/`;

export const TEXT_HEADERS = { 'Content-Type': 'text/plain; charset=utf-8' };
