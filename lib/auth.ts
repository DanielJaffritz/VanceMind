import { betterAuth, google } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma"
import { PrismaClient } from "./generated/prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate"
import { nextCookies } from "better-auth/next-js";
import EmailTemplate from "@/components/EmailTemplate";
import { resend } from "@/helpers/email/resend";

const prisma = new PrismaClient({
  accelerateUrl: process.env.DATABASE_URL as string,
}).$extends(withAccelerate());
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  trustedOrigins: [process.env.BETTER_AUTH_URL as string],
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    maxPasswordLength: 20,
    requireEmailVerification: true,
    autoSignIn: false,
  },
  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url }, request) => {
      await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: "delivered@resend.dev",
        subject: "Verify your email address",
        react: EmailTemplate({ firstName: user.name, verifyUrl: url }),
      });
    }
  },
  baseURL: process.env.BETER_AUTH_URL as string,
  socialProviders: {
    google: {
      clientId: process.env.CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRET as string,
    },
  },
  plugins: [
    nextCookies(),
  ]
})
