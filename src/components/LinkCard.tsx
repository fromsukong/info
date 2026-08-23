import type {ReactNode} from 'react';
import {ClickableCard} from '@astryxdesign/core/ClickableCard';
import {Text} from '@astryxdesign/core/Text';
import {Thumbnail} from '@astryxdesign/core/Thumbnail';

interface LinkCardProps {
  /** Raster icon from /assets — omit when iconNode is used */
  icon?: string;
  /** Inline SVG node (lucide icon) — used instead of `icon` */
  iconNode?: ReactNode;
  iconAlt?: string;
  label: string;
  sub?: string | null;
  href: string;
  target?: string;
  highlight?: boolean;
  eventName?: string;
}

export default function LinkCard({icon, iconNode, iconAlt, label, sub, href, target = '_blank', highlight = false, eventName}: LinkCardProps) {
  return (
    <ClickableCard
      href={href}
      target={target}
      label={label}
      padding={0}
      className={`link-card${highlight ? ' link-card-highlight' : ''}`}
      {...(eventName ? {'data-umami-event': eventName} : {})}
    >
      <div className="link-card-inner">
        {iconNode ? (
          <div className="link-card-icon">
            {iconNode}
          </div>
        ) : (
          <Thumbnail src={icon} alt={iconAlt} className="link-card-icon" />
        )}
        <Text type="body" weight="medium" justify="center" display="block" className="link-card-label">
          {label}
        </Text>
        {sub && (
          <Text type="supporting" justify="center" display="block" className="link-card-sub">
            {sub}
          </Text>
        )}
      </div>
    </ClickableCard>
  );
}
