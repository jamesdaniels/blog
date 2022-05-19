---
setup: import Layout from '../../layouts/BlogPost.astro'
title: Hello world
publishDate: 19 May 2022
name: James Daniels
description: I've actually put something on this domain... let's see if I can keep it up
socialPreview: /assets/posts/hello-world.png
---

I've actually built a website, for myself.


It's built on Astro, Firebase Hosting, and Github Actions. It's leaning on Firebase CLI's Web Framework support&mdash;[now in preview](https://github.com/FirebaseExtended/firebase-framework-tools).

Enable it in the latest version of _firebase-tools_:

```bash
$ firebase --open-sesame frameworkawareness
```

<p style="color: var(--theme-text-lighter)">You can use the <em>FIREBASE_CLI_PREVIEWS</em> environment variable to enable the feature flag in <abbr title="Continuous Integration">CI</abbr>/<abbr title="Continuous Deployment">CD</abbr>.</p>

Using the _hosting.source_ option in _firebase.json_&mdash;rather than _hosting.public_&mdash; informs the Firebase CLI that it should try to built your web application.

```json
// firebase.json
{
  "hosting": {
    "source": ".",
    ...
  }
}
```

No additional configuration is needed for Next.js, Nuxt, and Angular, however we've not added first-class support for Astro&mdash;yet.

The CLI will run your NPM build script but in order to know where the assets destined for Firebase Hosting have been placed, you need to add  _directories.serve_ to your _package.json_:

```json
// package.json
{
  "directories": {
    "serve": "dist"
  },
  ...
}
```

With that, Firebase knows how to build and deploy an Astro app by your simply calling _firebase deploy_. 

Give the [new tooling for web frameworks a spin today](https://github.com/FirebaseExtended/firebase-framework-tools) &amp; file an issue on Github if you run into any trouble.

Happy coding!&mdash;James
