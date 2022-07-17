import { Wifi } from "@prisma/client"

type WifiData = Omit<Wifi, "id" | "createdAt">
type WifiBody = Omit<WifiData, "userId">

export { WifiData, WifiBody }
