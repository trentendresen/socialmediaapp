import { Injectable } from '@angular/core';
import AWS from 'aws-sdk';
import { AuthService } from './AuthService';
import * as fs from 'fs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AwsServiceService {
  [x: string]: any;
  private readonly awsConfig: AWS.Config;
  constructor(private authService: AuthService, private http: HttpClient) {
    this.awsConfig = new AWS.Config({
      region: 'us-east-1', // Replace with your bucket's region
      credentials: {
        accessKeyId: 'AKIATGRJQPSZARBDTOIA', // Replace with your AWS access key ID
        secretAccessKey: '/iw/sgFuNDblWP90TQJ2Y5S1A0zoh+h0htNLGcfK',
      },
    });
  }
  public async listS3Buckets() {
    const s3 = new AWS.S3(this.awsConfig);
    const params: AWS.S3.ListObjectsV2Request = {
      Bucket: 'amplify-socialmediaapp-dev-201218-deployment',
    };
    const fileBlob = await this.http
      .get('assets/image.png', { responseType: 'blob' })
      .toPromise();

    s3.putObject(
      {
        Bucket: 'amplify-socialmediaapp-dev-201218-deployment',
        Body: fileBlob,
        Key: `photos/sajhe2cxcx8hs`,
      },
      function (err, response) {
        if (err) {
          console.error(err);
        }
      }
    );
    s3.listObjects(
      {
        Bucket: 'amplify-socialmediaapp-dev-201218-deployment',
      },
      function (err, data) {
        if (err) {
          console.error(err, err.stack);
        }
      }
    );
  }

  public async putObjectIntoBucket(
    file: any,
    userId: string
  ): Promise<string | null> {
    if (file) {
      const s3 = new AWS.S3(this.awsConfig);
      const bucketName = 'amplify-socialmediaapp-dev-201218-deployment';
      const key = `photos/${userId}/${file.name}`;
      s3.putObject(
        {
          Bucket: bucketName,
          Body: file,
          Key: key,
        },
        function (err, response) {
          if (err) {
            console.error(err);
          }
        }
      );
      const url = `https://${bucketName}.s3.amazonaws.com/${key}`;
      return url;
    } else {
      return null;
    }
  }
}
