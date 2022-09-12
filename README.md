# rn-ad-auth

A React Native Component which provides complete Authentication flow for Azure AD.

## Installation

```sh
npm install rn-ad-auth
```

This package is dependent on [React Native Webview](https://github.com/react-native-webview/react-native-webview) package which is internally used in the package. You can read the installation steps from [here](https://github.com/react-native-webview/react-native-webview/blob/master/docs/Getting-Started.md).

### App Registration

First, you will need to register your application with Microsoft Azure Portal. This will give you an Application ID for your application, as well as enable it to receive tokens.

1. Sign in to the [Microsoft Azure Portal](https://portal.azure.com).
1. First you need to find the **App Registration Service**. You could just type in the service name in the search bar on the middle top of the window and select it or do like following:
   1. Click on **All services** in the left panel
   2. Then select from the shown in bold categories the **Identity**
   3. Click on the star sign near the _App registration_ service name to add it to favorites
   4. Now you can easily access the service using the left portal panel
1. After selecting _App registration_ service click **New registration**
1. Enter a friendly name for the application
1. Select account type that should be supported by your app. The default choice _"Accounts in any organizational directory and personal Microsoft accounts"_ is the widest one.
1. Now you need to add **Redirect URI**
   1. Select _Public client (mobile & desktop)_ from dropdown
   2. Type `https://azure-ad-login-3606b.web.app/` here.
1. Click **Register** to create the app registration record.
1. Find the _Application (client) ID_ value in **Overview** section, copy and save the value in a safe location.
1. You don't need to set _API Permissions_. It is meant for admin consent only.
1. Now select **Authentication** from the left menu
1. Select checkbox **ID tokens** in the _Implicit grant_ section - it is needed for OpenID Connect. The library will still use authorization grant and not imlicit.
1. Click **Save** button above to save changes.


### Usage:-

```js
import AuthModal from "rn-ad-auth";
```

```js
// App Configuration
const config = {
	tenant_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx", // Your App's Tenant ID here.
	client_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx", // Your App's client ID here.
	scope: "openid", // Need to define scope for getting auth tokens, openid is mendatory.
};
```

```js
<!--Handle Login or Logout Success-->
const onSuccess = (response) => {
	console.log("response", response);
};

<!--Handle Login or Logout Failure-->
const onFailure = (error) => {
	console.error("error", error);
};

<!--Handle Login or Logout Failure-->
const onClose = () => {
	console.log('Authentication Cancelled');
};

// To be used as a component
<AuthModal
	config={config}
	action={"login"}
	open={modalOpen}
	onClose={onClose}
	onSuccess={onSuccess}
	onFailure={onFailure}
/>;
```

### Component props:-

|    Key    |             Usage             |           RightAccepted Values            |
| :-------: | :---------------------------: | :---------------------------------------: |
|  config   |     Configugration Object     | Object with (tenant_id, client_id, scope) |
|  action   |       Action to Perform       |            'login' OR 'logout'            |
|  onClose  |  Emits when modal is closed   |    Function to perform next operation     |
| onSuccess | Emits when Auth is successful |        Function to handle success         |
| onFailure | Emits when Auth is failed     |         Function to handle error          |