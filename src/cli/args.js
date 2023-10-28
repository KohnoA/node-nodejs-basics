import { argv } from 'node:process';

const parseArgs = () => {
  const VAR_DESIGNATION = '--';
  const passedArgs = argv.slice(2, argv.length);

  const result = passedArgs.reduce((acc, next, index, thisArr) => {
    if (next.includes(VAR_DESIGNATION)) {
      const key = next.replace(VAR_DESIGNATION, '');
      const value = thisArr[index + 1];

      acc.push(`${key} is ${value}`);
    }

    return acc;
  }, []).join(', ');

  console.log(result);
};

parseArgs();
