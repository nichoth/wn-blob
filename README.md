# wn blob

Save blobs to webnative

-------------------------------------

## notes

```js
initialize(perms) => loadFileSystem(perms)
```

-------------------------------------------------------------

the lobby endpoint is hardcoded into the app -- https://github.com/fission-suite/webnative/blob/d96cf4c3cafa5bc4bce380f0c37ad3e7f5e0e53d/src/setup/internal.ts#L16

How does the lobby adjust authentication state?

https://github.com/fission-suite/auth-lobby


---------------------------------------------------------------------


## traced the call to wn.initialise

* if !authorized, then ucan.store([])
* authedUsername = common.authenticatedUsername()
  - storage.getItem(USERNAME_STORAGE_KEY)
  - => null
* if !authedUsername, => scenarioNotAuth

---------------------------------------

if (authedUsername)
  - validateSecrets
    + => [ucanPermissions.paths](https://github.com/fission-suite/webnative/blob/924db533a842ab80c8f4e59bf1af4c6296d0ee7c/src/ucan/permissions.ts#L47)
      - => []
        - const keyName = await identifiers.readKey({ path })
        - return await crypto.keystore.keyExists(keyName)


---------------------------------------------------------

const validUcans = ucan.validatePermissions(permissions, authedUsername)

https://github.com/fission-suite/webnative/blob/924db533a842ab80c8f4e59bf1af4c6296d0ee7c/src/ucan/internal.ts#L31


const rootUcan = dictionary.lookup("*")

it's an in-memory dictionary

[dictionary.lookup](https://github.com/fission-suite/webnative/blob/924db533a842ab80c8f4e59bf1af4c6296d0ee7c/src/ucan/dictionary.ts#L67)

=> store.getDictionary(label)

validatePermissions looks for a '*' label of UCAN

-----------------------------------------------------------

[authenticatedUsername](https://github.com/fission-suite/webnative/blob/924db533a842ab80c8f4e59bf1af4c6296d0ee7c/src/common/index.ts#L21)

* need to set a username under USERNAME_STORAGE_KEY = "webnative.auth_username"
* need to set a UCAN in the dictionary under '*'



