import { WizFrame } from '../../frame';

function Settings() {
  return (
    <WizFrame
      navHighlight={['SETTINGS', 'Bootstrap', 'Light']}
      pageTitle="A page title"
    >
      some page
    </WizFrame>
  );
}

export default Settings;
