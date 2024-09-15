# Angular Basics

## Adding HttpClient to Angular 18

In case of standalone, you need to add bootstrap providers in `app.config.ts`

```javascript
// app.config.ts
...
import { provideHttpClient } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()],
};
```

minnor change
