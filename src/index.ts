import cron from "node-cron";
import { exec } from 'child_process';

cron.schedule('* * * * *', () => {
  console.log('running.....');
  exec(`yarn playwright test --headed`, (err, stdout, stderr) => {
    if (err) {
      console.log(err);
    } else {
      console.log(stdout);
    }
  });
});
