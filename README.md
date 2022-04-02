# Hosting

Hosted on AWS Amplify

- [PROD: https://tinyurl.com/terraformish](https://tinyurl.com/terraformish)
- [DEV](https://dev.d330gurt4y4vlq.amplifyapp.com/)

# Goal

The goal is to automate the tedious task of converting `.tfstate` to `.tf` files. **Not even Terraform itself supports this!** That shouldn't stop us from a tool with _partial_ automation. This is **"Terraformish"**

## Core Objectives

Write generic code that is not specific to one cloud provider or one cloud resource

## Terraformish vs Others

|                     | Terraformish                                                              | Others                                                                         |
| ------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Reliability         | ✅ For ALL resources <br/> 🟡 Produces ~80% accurate code                 | 🟡 For SOME resources <br/> ✅ Produces exact `.tf` file                       |
| Supported resources | ✅ Supports ALL `.tfstates`                                               | ❌ Support varies based on resource                                            |
| Strategy            | ✅ Easy to maintain generic reusable code that achieves most of your goal | ❌ Unrealistic to support all fields for all resources for all cloud providers |

# Deploy

1. `yarn deploy`
1. Go to [https://tjm165.github.io/terraformish](https://tjm165.github.io/terraformish)
