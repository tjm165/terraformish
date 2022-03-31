const s3 = `{
  "type": "aws_s3_bucket",
  "name": "my_s3_bucket",
  "provider": "provider[\\"registry.terraform.io/hashicorp/aws\\"]",
  "instances": [
    {
      "attributes": {
        "bucket": "my_s3_bucket_name"
      }
    }
  ]
}

`;
export default { s3 };
