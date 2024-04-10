import { AppScreen } from '@stackflow/plugin-basic-ui';

type SettingsParams = {
  params: {
    name: string;
  };
};
const Settings: React.FC<SettingsParams> = ({ params: { name } }) => {
  return (
    <AppScreen appBar={{ title: 'Settings' }}>
      <div>
        <h1>{name}</h1>
      </div>
    </AppScreen>
  );
};

export default Settings;
