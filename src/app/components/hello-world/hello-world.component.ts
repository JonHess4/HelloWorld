import { Component, OnInit } from '@angular/core';

import { HelloWorldModel } from '../../models/hello-world-model';
import { HelloWorldService } from '../../services/hello-world.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  private helloWorldModel: HelloWorldModel;

  constructor(
    private helloWorldService: HelloWorldService
  ) { }

  ngOnInit() {
    this.setHelloWorldById(1);
  }

  setHelloWorldById(id: number) {
    this.helloWorldService.getHelloWorldById(id).subscribe( helloWorldModel => {
      this.helloWorldModel = helloWorldModel;
    });
  }

}
