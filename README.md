# TodoListFe

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# structure folder
```bash
src/
├── app/
│   ├── core/
│   │   ├── services/       // Dịch vụ chung cho toàn ứng dụng (ví dụ: AuthService, HttpService)
│   │   ├── models/         // Các model dùng chung (ví dụ: User, Product)
│   │   ├── interceptors/   // Các interceptor chung cho toàn bộ ứng dụng
│   │   └── guards/         // Các guard dùng chung
│   ├── shared/
│   │   ├── components/     // Các component dùng chung như Button, Modal, Card
│   │   ├── directives/     // Các directive dùng chung
│   │   └── pipes/          // Các pipe dùng chung
│   ├── features/
│   │   ├── auth/
│   │   │   ├── auth.module.ts
│   │   │   ├── auth.component.ts
│   │   │   └── auth.service.ts
│   │   ├── user/
│   │   │   ├── user.module.ts
│   │   │   ├── user-list/
│   │   │   │   └── user-list.component.ts
│   │   │   ├── user-detail/
│   │   │   │   └── user-detail.component.ts
│   │   │   ├── user.service.ts
│   │   │   └── user.state.ts
│   │   └── product/
│   │       ├── product.module.ts
│   │       ├── product-list/
│   │       │   └── product-list.component.ts
│   │       ├── product-detail/
│   │       │   └── product-detail.component.ts
│   │       ├── product.service.ts
│   │       └── product.state.ts
│   ├── app-routing.module.ts
│   ├── app.component.ts
│   └── app.module.ts
```



# test write readme.md

- src/
  - app/
    - core/
      - services/
        - http/
          - http.service.ts      // Service HTTP chung
        - auth/
          auth.service.ts      // Service liên quan đến xác thực
        - api/
          api.service.ts       // Service quản lý URL API và cấu hình chung
      - interceptors/
        - auth.interceptor.ts    // Interceptor cho việc thêm token vào request
      - guards/
        - auth.guard.ts          // Guard bảo vệ các route yêu cầu xác thực
      - models/
        - user.model.ts          // Định nghĩa kiểu dữ liệu User
        - product.model.ts       // Định nghĩa kiểu dữ liệu Product
    - shared/
      - components/
        - button/
          - button.component.ts  // Component button dùng chung
        - modal/
          - modal.component.ts   // Component modal dùng chung
      - directives/
        - custom-highlight.directive.ts // Directive highlight chung
      - pipes/
        - date-format.pipe.ts    // Pipe định dạng ngày
    - services/
      - user/
        - user.service.ts        // Service của tính năng User
        - user.api.ts            // API của tính năng User
        - user.state.ts          // State của tính năng User
      - product/
        - product.service.ts     // Service của tính năng Product
        - product.api.ts         // API của tính năng Product
        - product.state.ts       // State của tính năng Product
    - features/
      - user/
        - user.module.ts
        - user.component.ts      // Component chính cho User
      - product/
        - product.module.ts
        - product.component.ts   // Component chính cho Product
    - app-routing.module.ts
    - app.component.ts
    - app.module.ts

