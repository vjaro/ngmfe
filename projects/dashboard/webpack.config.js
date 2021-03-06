const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "dashboard",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      
        // For remotes (please adjust)
        // name: "dashboard",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './projects/dashboard/src/app/app.component.ts',
        // },        
        
        // For hosts (please adjust)
        remotes: {
            // "mfe1": "mfe1@http://localhost:4300/remoteEntry.js",

        },

        shared: {
          "@angular/core": { singleton: true, strictVersion: true, eager: true }, 
          "@angular/common": { singleton: true, strictVersion: true, eager: true }, 
          "@angular/common/http": { singleton: true, strictVersion: true, eager: true }, 
          "@angular/router": { singleton: true, strictVersion: true, eager: true },

          ...sharedMappings.getDescriptors()
        }
        
    }),
    sharedMappings.getPlugin()
  ],
};
