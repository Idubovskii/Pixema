import './App.styles.css';
import { Button } from './shared/ui/Button/Button';

export const App = () => {
  return (
    <Button
      text="Primary"
      onClick={() => {
        console.warn('Primary');
      }}
    />
  );
};
