import {
  nowInSec,
  SkyWayAuthToken,
  SkyWayConfigOptions,
  uuidV4,
} from "@skyway-sdk/room";

const testToken = new SkyWayAuthToken({
  jti: uuidV4(),
  iat: nowInSec(),
  exp: nowInSec() + 60 * 60 * 24,
  scope: {
    app: {
      id: "77b6f44d-df51-457e-89fa-53b73847245c",
      turn: true,
      actions: ["read"],
      channels: [
        {
          id: "*",
          name: "*",
          actions: ["write"],
          members: [
            {
              id: "*",
              name: "*",
              actions: ["write"],
              publication: {
                actions: ["write"],
              },
              subscription: {
                actions: ["write"],
              },
            },
          ],
          sfuBots: [
            {
              actions: ["write"],
              forwardings: [{ actions: ["write"] }],
            },
          ],
        },
      ],
    },
  },
});
export const tokenString = testToken.encode(
  "LJMJn+4oBxLtMxeSR1+FLIeNyon/e7MykpkSFF9X8e8="
);
export const contextOptions: Partial<SkyWayConfigOptions> = {
  log: { level: "debug" },
};
