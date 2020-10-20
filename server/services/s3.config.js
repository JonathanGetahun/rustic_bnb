const aws = require('aws-sdk');


const s3Client = new aws.S3({
    secretAccessKey:process.env.SECRETACCESSKEY,
    accessKeyId:process.env.ACCESSKEYID,
    region:'us-east-2'
})

const downloadParams = {
    Bucket: 'rustic-bnb-images', 
    Key:''
}

const s3 = {}
s3.s3Client = s3Client;
s3.downloadParams = downloadParams;

module.exports = s3;