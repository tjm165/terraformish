const s3 = {
  import:
    "terraform import aws_s3_bucket.my_s3_bucket_name bucket-name-in-cloud",
  tfState: `{
  "type": "aws_s3_bucket",
  "name": "my_s3_bucket",
  "provider": "provider[\\"registry.terraform.io/hashicorp/aws\\"]",
  "instances": [
    {
      "schema_version": 0,
      "attributes": {
        "bucket": "my_s3_bucket_name"
      }
    }
  ]
}
`,
};

const lambda = {
  import:
    "terraform import aws_lambda_function.my_lambda_function lambda-name-in-cloud",
  tfState: `{
    "mode": "managed",
    "type": "aws_lambda_function",
    "name": "my_lambda_function",
    "provider": "provider[\\"registry.terraform.io/hashicorp/aws\\"]",
    "instances": [
      {
        "schema_version": 0,
        "attributes": {
          "architectures": [
            "arm64"
          ],
          "handler": "lambda.handler",
          "memory_size": 128,
          "role": "arn:aws:iam::123456123456:role/my-lambda-role",
          "runtime": "python3.6",
          "s3_bucket": null,
          "s3_key": null,
          "s3_object_version": null,
          "source_code_hash": "605965c375b61fadb646245683d6462d605965c375b6",
          "source_code_size": 123456,
          "version": "4"
        }
      }
    ]
  }
  `,
};

export default { s3, lambda };
