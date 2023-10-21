import { env } from 'node:process';

const parseEnv = () => {
  const TARGET_ENV_PREF = 'RSS_';

  const result = Object.entries(env).reduce((acc, next) => {
    const [ key, value ] = next;

    if (key.includes(TARGET_ENV_PREF)) {
      acc.push(`${key}=${value}`);
    }

    return acc;
  }, []).join('; ');

  console.log(result);
};

parseEnv();
