const debug = process.env.NODE_ENV !== "production";

const githubUsername = "deepaksy"; 

module.exports = {
  assetPrefix: !debug ? `https://${githubUsername}.github.io/` : '',
}
