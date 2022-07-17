import { Card } from "@prisma/client"

type CardData = Omit<Card, "id" | "createdAt">
type CardBody = Omit<CardData, "userId">

export { CardData, CardBody }
