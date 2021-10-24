module.exports = {
    extension: ["ts"],
    spec: [
        // "test/**/*.test.ts",
        "test/*.spec.ts"
    ],
    require: ["ts-node/register", "test/mocha-hook.ts"],
    timeout: 120000,
    loader: "ts-node/esm",
}
