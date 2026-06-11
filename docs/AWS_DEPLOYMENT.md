# AWS 部署说明

当前项目是 Vue3 + Vite 静态前端，推荐部署到 S3 静态站点并通过 CloudFront 对外访问。

## GitHub Secrets

在 GitHub 仓库 `Settings -> Secrets and variables -> Actions` 中配置：

| Secret | 必填 | 说明 |
| --- | --- | --- |
| `AWS_ACCESS_KEY_ID` | 是 | 具备 S3 上传权限的 Access Key |
| `AWS_SECRET_ACCESS_KEY` | 是 | 对应 Secret Key |
| `AWS_REGION` | 是 | S3 Bucket 所在区域，例如 `ap-east-1` |
| `AWS_S3_BUCKET` | 是 | 部署目标 Bucket 名称 |
| `AWS_CLOUDFRONT_DISTRIBUTION_ID` | 否 | 配置后会自动刷新 CloudFront 缓存 |

## 最小 IAM 权限

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket"
      ],
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME"
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:DeleteObject",
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation"
      ],
      "Resource": "*"
    }
  ]
}
```

如果不使用 CloudFront，可以移除 `cloudfront:CreateInvalidation` 权限，并不配置 `AWS_CLOUDFRONT_DISTRIBUTION_ID`。

## 部署触发

工作流文件：`.github/workflows/deploy-aws.yml`

触发方式：

- 推送到 `main` 分支自动部署。
- 在 GitHub Actions 页面手动运行 `Deploy to AWS`。

## 构建流程

1. 安装依赖：`npm ci`
2. 运行测试：`npm test`
3. 构建产物：`npm run build`
4. 上传 `dist/` 到 S3
5. 可选刷新 CloudFront 缓存
