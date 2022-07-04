import { Injectable } from '@nestjs/common';

import { Slide } from '@podname/api-interfaces';


@Injectable()
export class AppService {

getData(): Slide[] { return []; }


}
