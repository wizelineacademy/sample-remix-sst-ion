/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "my-remix-app",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const database = new sst.aws.Postgres("MyDatabase", {
      scaling: {
        min: "1 ACU",
        max: "4 ACU",
      },
    });
    new sst.aws.Remix("MyWeb", {
      link: [database],
    });
  },
});
