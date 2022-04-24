export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "userPoolGroups": {
            "anyoneGroupRole": "string",
            "staffGroupRole": "string",
            "adminGroupRole": "string"
        },
        "bhpmjs10bca66010bca660": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "function": {
        "bhpmjs10bca66010bca660PostConfirmation": {
            "Name": "string",
            "Arn": "string",
            "LambdaExecutionRole": "string",
            "Region": "string"
        }
    },
    "api": {
        "bhpmjs": {
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "storage": {
        "s3d991d862": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}