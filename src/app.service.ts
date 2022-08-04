import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process';

@Injectable()
export class AppService {
  getHello() {
    let datatosend: any;
    const pyProg = spawn('python', ['src/module/test.py']);
    // console.log(pyProg.stdout);
    pyProg.stdout.on('data', function (data: any) {
      console.log('성공?', data.toString());
      datatosend = data;
    });

    pyProg.stderr.on('data', function (data: any) {
      console.log('실패?', data.toString());
    });

    pyProg.on('exit', () => {
      console.log(datatosend);
    });
  }
}
