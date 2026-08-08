import {useState} from 'react';
import {ClickableCard} from '@astryxdesign/core/ClickableCard';
import {Dialog} from '@astryxdesign/core/Dialog';
import {Text} from '@astryxdesign/core/Text';
import {Icon} from '@astryxdesign/core/Icon';
import {IconButton} from '@astryxdesign/core/IconButton';
import {VStack} from '@astryxdesign/core/Layout';
import {ContactRound, Mail, Phone} from 'lucide-react';
import {CONTACT} from './data';

const VCARD = [
  'BEGIN:VCARD',
  'VERSION:3.0',
  `FN:${CONTACT.name}`,
  `EMAIL;TYPE=INTERNET:${CONTACT.email}`,
  `TEL;TYPE=CELL:${CONTACT.phone}`,
  'END:VCARD',
].join('\n');

function saveContact() {
  const url = URL.createObjectURL(new Blob([VCARD], {type: 'text/vcard'}));
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Supakone_Kongprapan.vcf';
  a.click();
  URL.revokeObjectURL(url);
}

export default function ContactCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ClickableCard label="Other Preferd Method" padding={0} className="link-card" onClick={() => setOpen(true)}>
        <div className="link-card-inner">
          <div className="link-card-icon">
            <ContactRound size={48} className="link-card-contact-icon" />
          </div>
          <Text type="body" weight="medium" justify="center" display="block" className="link-card-label">
            Other Preferd Method
          </Text>
        </div>
      </ClickableCard>

      <Dialog isOpen={open} onOpenChange={setOpen} className="contact-sheet" width="100%" maxHeight="90dvh" aria-label={`Contact ${CONTACT.name}`}>
        <div className="contact-sheet-body">
          <header className="contact-sheet-top">
            <img src="/assets/avatar.png" alt={CONTACT.name} className="contact-sheet-avatar" />
            <p className="contact-sheet-name">{CONTACT.name}</p>
            <p className="contact-sheet-work">{CONTACT.work}</p>
          </header>

          <VStack gap={2} className="contact-sheet-cards">
            <div className="contact-sheet-row">
              <Mail size={20} aria-hidden="true" />
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </div>
            <div className="contact-sheet-row">
              <Phone size={20} aria-hidden="true" />
              <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
            </div>
          </VStack>

          <footer className="contact-sheet-bar">
            <button className="contact-sheet-save" onClick={saveContact}>
              Save contact
            </button>
            <IconButton label="Close" icon={<Icon icon="close" />} variant="secondary" onClick={() => setOpen(false)} />
          </footer>
        </div>
      </Dialog>
    </>
  );
}
