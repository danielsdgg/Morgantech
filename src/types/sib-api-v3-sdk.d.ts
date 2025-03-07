declare module 'sib-api-v3-sdk' {
    export class ApiClient {
      static instance: ApiClient;
      authentications: {
        'api-key': { apiKey: string };
      };
    }
  
    export class TransactionalEmailsApi {
      sendTransacEmail(email: SendSmtpEmail): Promise<any>;
    }
  
    export class SendSmtpEmail {
      sender: { name: string; email: string };
      to: { email: string }[];
      subject: string;
      htmlContent: string;
    }
  }