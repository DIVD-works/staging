import type { RouteParams } from "$app/types";
import type { RequestEvent } from "@sveltejs/kit";

export const actions: {
    default: ({ cookies }: RequestEvent<RouteParams<"/services">, "/services">) => Promise<{success: boolean}>;
} = {
    default: async ({ cookies }) => {
        cookies.set("g_state", '{"i_l":0,"i_ll":1772993844350,"i_b":"F1sbcdGVwkZ8L1QP3qM7sXetjju2qzQY8oMFoC9FeJ8","i_e":{"enable_itp_optimization":16}}', {
            path: "/",
            //expires: new Date("2026-09-04T18:17:24.000Z"),
            httpOnly: false,
            secure: false,
            sameSite: "lax",
            partitioned: false,
            priority: "medium",
            maxAge: (60 * 60 * 24 * 31) // 31 days
        });

        cookies.set("guest", "guest_3ce1a8411c80c237", {
            path: "/",
            //expires: new Date("2026-04-08T19:38:00.264Z"),
            httpOnly: true,
            secure: true,
            sameSite: "none",
            partitioned: false,
            priority: "medium",
            maxAge: (60 * 60 * 24) // 1 day
        });

        cookies.set("userReferer", "https%3A%2F%2Fapi.jotform.com%2F", {
            path: "/",
            //expires: new Date("2026-04-08T18:16:19.917Z"),
            httpOnly: true,
            secure: true,
            sameSite: "none",
            partitioned: false,
            priority: "medium",
            maxAge: (60 * 60 * 24) // 1 day
        });

        return { success: true };
    }
};

export function load({ cookies }): {
    sessionId: string | undefined;
} {
  const sessionId = cookies.get("g_state");
  return { sessionId };
}
