import { PrismaClient } from "@prisma/client";
declare global {
    var prisma: PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient()

if( process.env.NODE_ENV !=="production") globalThis.prisma = db
// here we made a global variable so that everytime we relaod page, so that new prisma client is not initialised everytime we change a line
//of code. in production we won't use gloabalThis.prisma