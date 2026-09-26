import { Controller, Get, Query } from "@nestjs/common";
import { greeting } from "./greeting";

@Controller()
export class AppController {
  @Get("health")
  health(): { status: string } {
    return { status: "ok" };
  }

  @Get("hello")
  hello(@Query("name") name = ""): { message: string } {
    return { message: greeting(name) };
  }
}
