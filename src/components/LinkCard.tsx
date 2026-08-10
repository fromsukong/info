import {ClickableCard} from '@astryxdesign/core/ClickableCard';
import {Text} from '@astryxdesign/core/Text';
import {Thumbnail} from '@astryxdesign/core/Thumbnail';

interface LinkCardProps {
  icon: string;
  iconAlt?: string;
  label: string;
  sub?: string | null;
  href: string;
  target?: string;
}

export default function LinkCard({icon, iconAlt, label, sub, href, target = '_blank'}: LinkCardProps) {
  return (
    <ClickableCard href={href} target={target} label={label} padding={0} className="link-card">
      <div className="link-card-inner">
        <Thumbnail src={icon} alt={iconAlt} className="link-card-icon" />
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
