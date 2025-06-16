# Personalize example - Next.js

NextJS web app to demo Personalize, intended to be hosted on Launch.

## Setting up the stack

This project comes with an export of the CMS stack so that you can easily get started with it. Extract the archive `personalize-example-stack.zip` in the root folder of this repository, and then import it to your stack using the command line like so:

```bash
csdx cm:stacks:import -a token-alias -d "/path/to/export"
```

Checkout the [Contentstack CLI documentation](https://www.contentstack.com/docs/developers/cli/import-content-using-the-cli) for more details.

## Getting Started

First, add the environment variables by creating a `.env` file. You can copy the `.env.example` file to get a list of the expected environment variables.

If you're not working with the AWS NA production environment, you can set the following environment variables:

`CONTENTSTACK_DELIVERY_API_HOST`: Just the host of the target CMS delivery environment. For example, `eu-cdn.contentstack.com`
`CONTENTSTACK_PERSONALIZE_EDGE_API_URL`: The URL of the target personalize delivery environment. For example, `https://eu-personalize-edge.contentstack.com`.

For setting up NextAuth:

`NEXTAUTH_URL`={deployed domain} (should be http://localhost:3000 in case you're developing locally)
`NEXTAUTH_SECRET`={secret string} (use `openssl rand -base64 12` command to generate a random secret string)

For setting up GitHub auth:

Navigate to GitHub -> Profile Icon -> Settings -> Developer Settings. Here, create an OAuth app with the following details:
- Homepage URL: Same as `NEXTAUTH_URL`
- Authorization callback URL: Same as `NEXTAUTH_URL` + `/api/auth/callback/github`

After creating, you'll need to generate a new client secret. Once done, populate the following environment variables:

`GITHUB_ID`={Client ID}
`GITHUB_SECRET`={Client Secret}

## Setting up Google Tag Manager

1. Create an account at `https://tagmanager.google.com` if you don't have one already and set up a container. Follow [our official documentation](https://www.contentstack.com/docs/personalize/google-tag-manager-integration-with-personalize#create-an-gtm-account-container-and-install-a-web-container) for more details.
2. We have an exported container in `gtm-container.json` which includes all the tags, triggers and variables needed for triggering impression, conversions and setting user attributes for this example project.
3. To import the fully setup container
    1. Open your newly created blank container on GTM.
    2. Go to admin and click on 'Import Container'.
    3. Choose the `gtm-container.json` container file and choose the appropriate option for workspace and overwrite options and import the container.
    4. You should see the Tags, Variables and Triggers get populated in your workspace.
4. Set the appropriate values for Project UID in the 'Init Personalize SDK' tag and Experience Short UIDS in the 'Trigger Home Page Impressions' tag.

Then, run the development server:

```bash
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Personalize the content

Once the above is setup, personalizing the content is as easy as creating creating new experiences in your Personalize project. Create experiences, customize content for those experiences and watch it work out of the box without requiring any code changes.