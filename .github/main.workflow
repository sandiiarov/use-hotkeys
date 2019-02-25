workflow "TSC, Test, Build and Publish" {
  on = "push"
  resolves = ["TSC", "Test", "Publish package"]
}

action "Install" {
  uses = "actions/npm@master"
  runs = "yarn"
  args = "install"
}

action "TSC" {
  needs = "Install"
  uses = "actions/npm@master"
  runs = "yarn"
  args = "tsc"
}

action "Test" {
  needs = "Install"
  uses = "actions/npm@master"
  runs = "yarn"
  args = "test"
}

action "Master" {
  needs = ["TSC", "Test"]
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Build package" {
  needs = "Master"
  uses = "actions/npm@master"
  runs = "yarn"
  args = "run pack build"
}

action "Publish package" {
  needs = "Build package"
  uses = "zackify/npm@354aa07c3dc1f17f66afa69d1ddaac4620dc0668"
  args = "cd pkg && npm publish --access public"
  secrets = ["NPM_AUTH_TOKEN"]
}
