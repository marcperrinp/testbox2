# Welcome to Forest Admin

Forest Admin is an admin panel framework which provides out-of-the-box all common admin tasks: CRUD operations, simple chart rendering, user group management and a WYSIWYG interface editor.


### How to get started if you created the project yourself

If you're reading this, you've probably already installed Forest Admin. Otherwise head over to https://www.forestadmin.com/ and click "Install Forest Admin".

Once you've got Forest Admin up and running, check out our [Setup Guide](https://docs.forestadmin.com/documentation/getting-started/setup-guide).

One of the recommended steps is to _Deploy to Production_. This will unlock the use of our [Forest CLI](https://www.npmjs.com/package/forest-cli) which lets you develop according to our recommended [Development Workflow]().


### How to get started if you're joining a team who uses Forest Admin

To develop on Forest Admin, you need to install [Forest CLI](https://www.npmjs.com/package/forest-cli):

```
$ npm install -g forest-cli
```

After you've cloned your team's Forest Admin repository, use the following command from that directory to get your first development environment (a.k.a branch):

```
$ forest branch <your-branch-name>
```

A branch is a fork of your *Production* environment's UI. 
Any layout changes should be done - using the [Layout Editor mode](https://docs.forestadmin.com/documentation/reference-guide/views/using-the-layout-editor-mode) - from your (local) branch and later deployed to Production.

Note this process only handles your admin **frontend**'s changes, _not_ your admin **backend**'s code updates which should be versioned and deployed separately. Check out our recommended [Development Workflow]() for more information.
