import NextAuth from 'next-auth/next';
import DiscordProvider from 'next-auth/providers/discord';

export const authOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization:
        'https://discord.com/api/oauth2/authorize?scope=identify+guilds+guilds.members.read',
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const guildMemeber = await fetch(
        `https://discordapp.com/api/users/@me/guilds/553221799194918949/member`,
        {
          headers: {
            Authorization: `Bearer ${account.access_token}`,
            'Content-Type': 'application/json',
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return data;
        });
      if (guildMemeber.roles.includes('672048184918409217')) {
        return true;
      } else return false;
    },
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.uid;
        session.accessToken = token.accessToken;
      }
      return session;
    },
    jwt: async ({ user, token, account }) => {
      if (user) {
        token.uid = user.id;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
  session: {
    strategy: 'jwt',
  },
};

export default NextAuth(authOptions);
