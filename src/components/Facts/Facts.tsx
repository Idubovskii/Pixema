import { type IFact } from '~/types/movie';

import styles from './styles.module.scss';

interface IFacts {
  facts: IFact[] | undefined;
}

export const Facts = ({ facts }: IFacts) => {
  return (
    <ul className={styles.facts}>
      {facts?.map((item) => (
        <li
          className={styles.facts_item}
          key={item.value}
          dangerouslySetInnerHTML={{ __html: item.value }}
        />
      ))}
    </ul>
  );
};
