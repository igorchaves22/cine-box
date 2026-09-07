# Known Issues

## Package installation

The project depends on packages that download or compile **native binaries** during installation, which can fail **silently**.

For this reason, the `package.json` already handles this automatically after every installation:

```json
"postinstall": "node node_modules/electron/install.js"
```

If the issue persists, run it manually:

```bash
# Electron
node node_modules/electron/install.js
```
