#!/usr/bin/env node
import { Command } from 'commander';

const bootstrap = () => {
  const program = new Command();

  // program.version(
  //     require('../package.json').version,
  //     '-v, --version',
  //     'Output the current version.',
  //   )
  //   .usage('<command> [options]')
  //   .helpOption('-h, --help', 'Output usage information.');
  // program.version('1.0.0')
  program.version('1.0.0', '-v --version', 'show the current version.');
  // program
  //   .command('build')
  //   .description('build web site for deployment')
  //   .action(() => {
  //     console.log('build');
  //   });

  // program
  //   .command('deploy')
  //   .description('deploy web site to production')
  //   .action(() => {
  //     console.log('deploy');
  //   });

  // program
  //   .command('serve', { isDefault: true })
  //   .description('launch web server')
  //   .option('-p,--port <port_number>', 'web port')
  //   .action((options) => {
  //     console.log(`server on port ${options.port}`);
  //   });

  program.parse();
};

bootstrap();
