import type {ReactNode} from 'react';
import {Link} from '@astryxdesign/core/Link';
import {Text} from '@astryxdesign/core/Text';
import LinkSection from './LinkSection';
import {INFO_SECTIONS} from './infoContent';

function renderInline(text: string): ReactNode[] {
  return text.split(/(\[[^\]]+\]\([^)]+\))/g).flatMap((segment, i) => {
    const link = segment.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return [
        <Link key={i} href={link[2]} target="_blank" label={link[1]} className="info-link">
          {link[1]}
        </Link>,
      ];
    }
    return segment.split(/(\*\*[^*]+\*\*)/g).map((part, j) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={`${i}-${j}`}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  });
}

export default function InfoSection() {
  return (
    <>
      {INFO_SECTIONS.map(({title, items}) => (
        <LinkSection key={title} title={title}>
          {items.map((item) => (
            <Text key={item} type="body" display="block" className="info-item">
              {renderInline(item)}
            </Text>
          ))}
        </LinkSection>
      ))}
    </>
  );
}
