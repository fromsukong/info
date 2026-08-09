import type {ReactNode} from 'react';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/Layout';

interface LinkSectionProps {
  title: string;
  offset?: boolean;
  children: ReactNode;
}

export default function LinkSection({title, offset, children}: LinkSectionProps) {
  return (
    <section aria-label={title}>
      <VStack className="link-stack">
        <Text
          type="label"
          weight="bold"
          justify="center"
          display="block"
          className={`section-header${offset ? ' section-header-hire' : ''}`}
        >
          {title}
        </Text>
        {children}
      </VStack>
    </section>
  );
}
