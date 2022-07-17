import { Credential } from "@prisma/client"

type CredentialData = Omit<Credential, "id" | "createdAt">
type CredentialBody = Omit<CredentialData, "userId">

export { CredentialData, CredentialBody }
