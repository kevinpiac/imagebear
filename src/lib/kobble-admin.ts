import { Kobble } from "@kobbleio/admin";

export const kobbleAdmin = new Kobble(process.env.KOBBLE_ADMIN_SECRET_KEY!);
