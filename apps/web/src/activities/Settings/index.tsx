import { AppScreen } from '@stackflow/plugin-basic-ui';

type SettingsParams = {
  params: {
    name: string;
  };
};
const SettingsActivity: React.FC<SettingsParams> = ({ params: { name } }) => {
  return (
    <AppScreen appBar={{ title: 'Settings' }}>
      <div>
        <h1>{name}</h1>
      </div>
    </AppScreen>
  );
};

export default SettingsActivity;
