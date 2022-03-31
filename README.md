# Goal

The goal is to automate the tedious task of converting `.tfstate` to `.tf` files. No tool can 100% streamline the task of importing existing cloud infastructure to valid terraform code.
This tool assists by producing the correct formatting. Thus it is **"terraformish"**

## Core Objectives

Write generic code that is not specific to one cloud provider or one cloud resource

## Terraformish vs Others

|                     | Terraformish                                                              | Others                                                                         |
| ------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Accuracy            | 🟡 Produces ~80% valid code <br/> ✅ For ALL resources                    | ✅ Produces exact `.tf` file <br/>🟡 For SOME resources                        |
| Supported resources | ✅ for ALL `.tfstates`                                                    | ❌ Varies based on resource                                                    |
| Strategy            | ✅ Easy to maintain generic reusable code that achieves most of your goal | ❌ Unrealistic to support all fields for all resources for all cloud providers |

# Deploy

1. `yarn deploy`
1. Go to [https://tjm165.github.io/terraformish](https://tjm165.github.io/terraformish)
